import { z } from "zod";

export interface RecordFormType {
	uploadFiles: string;
	saveMoney: number;
	content: string;
}
export const recordFormDefault = {
	uploadFiles: "",
	saveMoney: 0,
	content: "",
};

export const recordModalValidation = z.object({
	uploadFiles: z.string().url("유효한 URL을 입력하세요."),
	saveMoney: z.number().min(0, "금액은 0원 이상이어야 합니다."),
	content: z.string().min(1, "내용을 입력하세요."),
});
