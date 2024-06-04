import apiClient from "@lib/axiosConfig";

export default async function postSignUp(data: FormData) {
	return await apiClient.post("/api/signup", data);
}
