import apiClient from "@lib/axiosConfig";

const postGoals = async (data: FormData) => {
	return apiClient.post("/goals", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export default postGoals;
