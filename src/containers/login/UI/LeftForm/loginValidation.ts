import { z } from "zod";

export interface LoginFormType {
	email: string;
	password: string;
}
export const loginDefault = {
	email: "",
	password: "",
};
// 이메일
const emailCheckRegex =
	/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
// 비밀번호
// const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

export const loginValidation = z.object({
	email: z
		.string()
		.min(1, "이메일을 입력하세요.")
		.regex(emailCheckRegex, "이메일 형식에 맞지 않습니다"),

	password: z.string().min(8, "비밀번호는 8글자 이상이어야 합니다."),
	// .regex(passwordRegex, "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다."),
});
