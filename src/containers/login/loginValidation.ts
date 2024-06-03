import { z } from "zod";

export const loginDefault = {
	email: "",
	password: "",
};

export const FormSchema = z.object({
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
});
