import apiClient from "@lib/axiosConfig";

const patchUserInfo = async (userInfo: FormData) => {
	const response = await apiClient.patch(`/members/update`, userInfo);
	return response.data;
};

export default patchUserInfo;
