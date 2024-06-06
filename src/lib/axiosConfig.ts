import Axios, { AxiosInstance } from "axios";

import {
	rejectInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "@lib/interceptor";

import { envConfig } from "./envConfig";

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
