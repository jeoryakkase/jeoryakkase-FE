import { z } from "zod";
type GoalStatus = "PROCEEDING" | "COMPLETE" | "GIVE_UP" | "FAILURE";

export interface NaegongFormType {
	goalTitle: string;
	goalAmount: number;
	goalImage?: File | null;
	goalStartDate: Date;
	goalEndDate: Date;
}
export const NaegongDefault = {
	goalTitle: "",
	goalAmount: 0,
	goalImage: null,
	goalStartDate: new Date(),
	goalEndDate: new Date(),
};

export interface GoalItemType {
	id: number;
	goalTitle: string;
	goalAmount: number;
	currentAmount: number;
	goalImage: string;
	goalStartDate: string;
	goalEndDate: string;
	goalStatus: GoalStatus;
}

export const NaegongValidation = z.object({
	goalTitle: z.string().min(2, { message: "제목은 2글자 이상이어야 합니다." }),
	goalAmount: z.coerce
		.number()
		.int({ message: "금액는 정수여야 합니다." })
		.min(100, { message: "금액이 너무 적습니다" }),
	goalImage: z.instanceof(File).nullable().optional(),
	goalStartDate: z.date(),
	goalEndDate: z.date(),
});
