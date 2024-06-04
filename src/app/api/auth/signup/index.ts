import apiClient from "@lib/axiosConfig";

export default async function postSignUp(data: FormData) {
	return apiClient.post("/api/signup", data);
}
