import apiClient from "@lib/axiosConfig";

const postGoals = async (data: FormData) => {
	return await apiClient.post("/goals", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export default postGoals;
