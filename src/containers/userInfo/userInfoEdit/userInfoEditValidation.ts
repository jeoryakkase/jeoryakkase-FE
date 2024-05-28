import { z } from "zod";

const FormSchema = z.object({
	profileImage: z.instanceof(File).nullable().optional(),
	about: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	nickname: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	age: z.number().refine((age) => age >= 20 && age <= 100, {
		message: "Age must be between 20 and 100.",
	}),
	gender: z.enum(["male", "female"], {
		required_error: "You need to select a notification type.",
	}),
	savePurpose: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
	interests: z.array(z.string()),
});

export default FormSchema;
