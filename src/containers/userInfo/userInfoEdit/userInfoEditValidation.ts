import { z } from "zod";

export const userInfoEditDefault = {
	profileImage: null,
	about: "",
	email: "",
	nickname: "",
	age: 0,
	gender: "",
	savePurpose: "",
	interests: [],
};
const FormSchema = z.object({
	profileImage: z.instanceof(File).nullable().optional(),
	about: z.string().min(2, {
		message: "소개글은 2글자 이상이어야 합니다.",
	}),
	email: z.string(),
	nickname: z.string().min(2, { message: "닉네임은 2글자 이상이어야 합니다." }),
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
});

export default FormSchema;
