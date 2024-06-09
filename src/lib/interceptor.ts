import {
	AxiosError,
	AxiosRequestHeaders,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

import apiClient from "@lib/axiosConfig";
import showToast from "@lib/toastConfig";
import { getAccessToken, getRefreshToken } from "@utils/token.utils";
import { NextRequest } from "next/server";

interface AuthResponse {
	accessToken?: string;
	refreshToken?: string;
	message?: string;
	detail?: string;
	code?: string;
}

export const requestInterceptor = (config: InternalAxiosRequestConfig) => {
	const headers: AxiosRequestHeaders =
		(config.headers as AxiosRequestHeaders) || {};
	const req = new NextRequest(new Request(config.url!));
	const accessToken = getAccessToken(req);
	headers.Authorization = `Bearer ${accessToken}`;
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
		return handleTokenRefresh(error.config);
	}

	if (status === 400 && authData.message) {
		showToast({ type: "error", message: authData.message[0] });
	}

	if (authData.message) {
		showToast({ type: "error", message: authData.message[0] });
	}

	return Promise.reject(error);
};

const handleTokenRefresh = async (
	config: InternalAxiosRequestConfig | undefined,
): Promise<AxiosResponse | void> => {
	if (!config) {
		// logout();
		showToast({
			type: "error",
			message: "토큰 갱신을 위한 설정이 없습니다.",
		});
		throw new Error("토큰 갱신을 위한 설정이 없습니다.");
	}

	try {
		// 리프레시 만료되었는지 확인
		// /user/createAccessByRefresh
		const req = new NextRequest(new Request(config.url!));
		const refreshToken = await getRefreshToken(req);
		if (refreshToken) {
			const tokenRefreshResult = await apiClient.post("/token", {
				refreshToken,
			});
			if (tokenRefreshResult.status === 200) {
				const accessToken = tokenRefreshResult.headers.authorization;
				if (!accessToken) {
					showToast({
						type: "error",
						message: "새 액세스 토큰을 받아오는 데 실패했습니다.",
					});
					// logout();
				}

				// // 로컬 스토리지에 access 갱신
				// setAccessToken(accessToken);

				// 가져온 응답으로 헤더 갱신
				if (config.headers) {
					config.headers.Authorization = `Bearer ${accessToken}`;
				}
				return await apiClient(config);
			}
			// logout();
			showToast({
				type: "error",
				message: "세션 만료. 다시 로그인 해주세요.",
			});
			return await Promise.reject(new Error("토큰 갱신에 실패했습니다."));
		}
	} catch (error) {
		// logout();
		showToast({
			type: "error",
			message: "세션 만료. 다시 로그인 해주세요.",
		});
	}
};
