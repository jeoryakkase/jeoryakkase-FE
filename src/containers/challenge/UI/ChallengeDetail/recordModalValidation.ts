import { z } from "zod";

export interface RecordFormType {
	uploadFile: File;
	saveMoney: number;
	content: string;
}
export const recordFormDefault = {
	uploadFile: null as unknown as File,
	saveMoney: 0,
	content: "",
};

export const recordModalValidation = z.object({
	uploadFile: z.instanceof(File).refine((file) => file !== null, {
		message: "사진을 1개 이상 입력해주세요.",
	}),
	saveMoney: z.number().min(0, "금액은 0원 이상이어야 합니다."),
	content: z.string().min(1, "내용을 입력하세요."),
});
