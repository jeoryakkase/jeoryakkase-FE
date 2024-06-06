import apiClient from "@lib/axiosConfig";

async function getDuplicationEmail({ email }: { email: string }) {
	const response = await apiClient.get(`api/check-email/${email}`);
	return response.data;
}

async function getDuplicationNickName({ nickname }: { nickname: string }) {
	const response = await apiClient.get(`/api/check-nickname/${nickname}`);
	return response.data;
}
export { getDuplicationEmail, getDuplicationNickName };
