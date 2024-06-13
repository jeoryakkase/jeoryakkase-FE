import apiClient from "@lib/axiosConfig";

const getBookMark = async () => {
	const response = await apiClient.get(`/bookmark`);
	return response.data;
};

export default getBookMark;
