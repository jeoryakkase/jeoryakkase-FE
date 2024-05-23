import { z } from "zod";

export const FormSchema = z.object({
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
});

export const signUpDefault = {
	email: "",
	verify: "",
	nickname: "",
	password: "",
	confirmPassword: "",
	age: "0",
};
