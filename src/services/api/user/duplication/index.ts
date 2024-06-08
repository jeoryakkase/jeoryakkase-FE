import apiClient from "@lib/axiosConfig";

const getDuplicationEmail = async ({ email }: { email: string }) => {
	const response = await apiClient.get(`/check-email?email=${email}`);
	return response.data;
};

const getDuplicationNickName = async ({ nickname }: { nickname: string }) => {
	const response = await apiClient.get(`/check-nickname?nickname=${nickname}`);
	return response.data;
};
export { getDuplicationEmail, getDuplicationNickName };
