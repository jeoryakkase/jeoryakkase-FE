import { LoginFormType } from "@containers/login/UI/LeftForm/loginValidation";
import apiClient from "@lib/axiosConfig";

async function postLogin(data: LoginFormType) {
	return apiClient.post("/login", data);
}
export default postLogin;
