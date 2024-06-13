import apiClient from "@lib/axiosConfig";

const postBookMark = async (boardId: number) => {
	return apiClient.post(`/api/boards/${boardId}/bookmark`);
};

export default postBookMark;
