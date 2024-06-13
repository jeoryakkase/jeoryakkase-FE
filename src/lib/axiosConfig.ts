import Axios, {
	AxiosInstance,
	AxiosError,
	AxiosRequestHeaders,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";
import { signOut } from "next-auth/react";

import showToast from "@lib/toastConfig";
import getAccessToken from "@utils/token.utils";

import { envConfig } from "./envConfig";

interface AuthResponse {
	accessToken?: string;
	refreshToken?: string;
	message?: string;
	detail?: string;
	code?: string;
}

// 헤더에 액세스 토큰 넣어주기
export const requestInterceptor = async (
	config: InternalAxiosRequestConfig,
) => {
	const headers: AxiosRequestHeaders =
		(config.headers as AxiosRequestHeaders) || {};
	const accessToken = await getAccessToken();
	console.log("accessToken 헤더", accessToken);

	headers.Authorization = `${accessToken}`;

	config.headers = headers;
	return Promise.resolve(config);
};

export const responseInterceptor = (response: AxiosResponse): AxiosResponse =>
	response;

export const rejectInterceptor = (
	error: AxiosError,
): Promise<AxiosResponse | void> => {
	// 응답이 없으면 에러
	if (!error.response) {
		return Promise.reject(error);
	}
	const {
		response: { status, data },
	} = error;

	const authData: AuthResponse = data as AuthResponse;

	// 토큰 만료 시
	if (status === 401) {
		showToast({
			type: "error",
			message: "세션이 만료되었습니다. 다시 로그인해주세요.",
		});
		signOut({ callbackUrl: "/login" });
	}

	if (
		status === 409 &&
		// 중복 에러 코드를 따로 받기
		// ex. duplicated error
		authData.message === "Member with this email already exists."
	) {
		showToast({ type: "error", message: authData.message[0] });
	}

	if (authData.message) {
		showToast({ type: "error", message: authData.message[0] });
	}

	return Promise.reject(error);
};

const apiClient: AxiosInstance = Axios.create({
	withCredentials: true,
	baseURL: `${envConfig.BASE_URL}/api`,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.request.use(requestInterceptor);
apiClient.interceptors.response.use(responseInterceptor, rejectInterceptor);

export default apiClient;
