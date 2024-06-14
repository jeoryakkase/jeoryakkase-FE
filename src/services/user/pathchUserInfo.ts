import apiClient from "@lib/axiosConfig";

const patchUserInfo = async (userInfo: FormData) => {
	const response = await apiClient.patch(`/members/update`, userInfo, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data;
};

export default patchUserInfo;
