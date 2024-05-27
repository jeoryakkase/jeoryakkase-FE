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

export const FormSchema = z.object({
	profileImage: z.instanceof(File).nullable().optional(),
	about: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	verify: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	nickname: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
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
