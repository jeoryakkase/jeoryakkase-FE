import { SignUpFormType } from "@containers/signup/signupValidation";
import apiClient from "@lib/axiosConfig";

async function postSignUp(data: SignUpFormType) {
	return apiClient.post("/api/signup", data);
}

export default postSignUp;
