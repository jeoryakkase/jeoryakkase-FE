import { z } from "zod";

export const interestTags = [
	{ id: 1, name: "절약" },
	{ id: 2, name: "부동산" },
	{ id: 3, name: "주식" },
	{ id: 4, name: "절약팁" },
	{ id: 5, name: "가계부" },
	{ id: 6, name: "밀프랩" },
	{ id: 7, name: "부업" },
	{ id: 8, name: "앱테크" },
	{ id: 9, name: "핫딜" },
	{ id: 10, name: "여행" },
	{ id: 11, name: "자취" },
	{ id: 12, name: "공과금" },
];
export interface SignUpFormType {
	profileImage?: File | null; // 프로필
	about: string;
	email: string;
	nickname: string;
	password: string;
	confirmPassword: string;
	age: number;
	gender: string;
	savePurpose: string;
	interests: number[];
}
export const signUpDefault = {
	profileImage: null,
	about: "",
	email: "",
	nickname: "",
	password: "",
	confirmPassword: "",
	age: 0,
	gender: "",
	savePurpose: "",
	interests: [],
};
// 이메일
const emailCheckRegex =
	/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
// 비밀번호
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

export const signupValidation = z
	.object({
		profileImage: z.instanceof(File).nullable().optional(),
		// profileImage: z.string().optional(),
		about: z.string().min(2, {
			message: "소개글은 2글자 이상이어야 합니다.",
		}),
		email: z
			.string()
			.min(1, "이메일을 입력하세요.")
			.regex(emailCheckRegex, "이메일 형식에 맞지 않습니다"),

		nickname: z
			.string()
			.min(2, { message: "닉네임은 2글자 이상이어야 합니다." }),

		password: z
			.string()
			.min(8, "비밀번호는 8글자 이상이어야 합니다.")
			.regex(
				passwordRegex,
				"비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
			),
		confirmPassword: z
			.string()
			.min(8, "비밀번호 확인은 8글자 이상이어야 합니다."),
		age: z
			.number()
			.int({ message: "나이는 정수여야 합니다." })
			.min(1, { message: "나이는 1세 이상이어야 합니다." })
			.max(100, { message: "나이는 100세 이하여야 합니다." }),
		gender: z.enum(["MALE", "FEMALE"], {
			required_error: "성별을 선택하세요.",
		}),
		savePurpose: z.string().min(2, {
			message: "절약의 목적은 2글자 이상이어야 합니다.",
		}),
		interests: z.array(z.number()),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "비밀번호가 일치하지 않습니다.",
		path: ["confirmPassword"],
	});
