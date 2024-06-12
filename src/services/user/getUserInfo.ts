import apiClient from "@lib/axiosConfig";

const getUserInfo = async () => {
	const response = await apiClient.get(`/members/update-info`);
	return response.data;
};

export default getUserInfo;
