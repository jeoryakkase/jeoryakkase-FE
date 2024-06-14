import { LoginFormType } from "@containers/login/UI/LeftForm/loginValidation";
import apiClient from "@lib/axiosConfig";

const postLogin = async (data: LoginFormType) => {
	return apiClient.post("/login", data);
};
export default postLogin;
