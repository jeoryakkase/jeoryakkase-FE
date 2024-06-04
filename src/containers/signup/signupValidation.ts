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
export const signUpDefault = {
	profileImage: null,
	about: "",
	email: "",
	verify: "",
	nickname: "",
	password: "",
	confirmPassword: "",
	age: "0",
	savePurpose: "",
	interests: [],
};
// 허용된 이메일 도메인 목록
const allowedDomains = ["naver.com", "gmail.com", "kakao.com"];
const emailCheckRegex =
	/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 이메일 도메인 확인 유틸리티 함수
const isAllowedDomain = (email: string, allowedDomains: string[]) => {
	const domain = email.split("@")[1];
	return allowedDomains.some((allowedDomain) => domain === allowedDomain);
};

export const FormSchema = z.object({
	profileImage: z.instanceof(File).nullable().optional(),
	about: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	email: z
		.string()
		.min(1, "이메일을 입력하세요.")
		.regex(emailCheckRegex, "이메일 형식에 맞지 않습니다")
		.refine(
			(email) => isAllowedDomain(email, allowedDomains),
			"지원되는 도메인의 이메일을 사용하세요",
		),

	nickname: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),

	password: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	confirmPassword: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	age: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	gender: z.enum(["male", "female"], {
		required_error: "You need to select a notification type.",
	}),
	savePurpose: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	interests: z.array(z.string()),
});
