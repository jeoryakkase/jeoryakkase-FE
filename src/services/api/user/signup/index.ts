import { SignUpFormType } from "@containers/signup/signupValidation";
import apiClient from "@lib/axiosConfig";

const postSignUp = async (data: SignUpFormType) => {
	return apiClient.post("/api/signup", data);
};

export default postSignUp;
