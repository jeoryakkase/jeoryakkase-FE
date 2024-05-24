import {
	rejectInterceptor,
	requestInterceptor,
	responseInterceptor,
} from "@services/api";

import Axios from "axios";
import { AxiosInstance } from "axios";

const axios: AxiosInstance = Axios.create({
	withCredentials: true,
	// baseURL:
	headers: {
		"Content-Type": "application/json",
	},
});

axios.interceptors.request.use(requestInterceptor);
axios.interceptors.response.use(responseInterceptor, rejectInterceptor);

export default axios;
