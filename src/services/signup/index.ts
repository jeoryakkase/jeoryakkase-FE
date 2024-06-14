import apiClient from "@lib/axiosConfig";

const postSignUp = async (data: FormData) => {
	return apiClient.post("/signup", data, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
};

export default postSignUp;
