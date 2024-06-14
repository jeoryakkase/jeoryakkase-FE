import apiClient from "@lib/axiosConfig";

const getUserInfo = async () => {
	const response = await apiClient.get(`/members/mypage`);
	return response.data;
};

export default getUserInfo;
