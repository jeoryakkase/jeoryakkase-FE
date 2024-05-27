import Axios, { AxiosInstance } from "axios";

import {
	rejectInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "@services/api";

const apiClient: AxiosInstance = Axios.create({
	withCredentials: true,
	// baseURL:
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.request.use(requestInterceptor);
apiClient.interceptors.response.use(responseInterceptor, rejectInterceptor);

export default apiClient;
