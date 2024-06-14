import apiClient from "@lib/axiosConfig";

const getUserInfoEdit = async () => {
	const response = await apiClient.get(`/members/update-info`);
	return response.data;
};

export default getUserInfoEdit;
