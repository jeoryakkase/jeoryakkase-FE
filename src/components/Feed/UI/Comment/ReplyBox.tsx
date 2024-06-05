import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@components/Button";
import {
	FormControl,
	FormField,
	FormItem,
	Form,
	FormMessage,
} from "@components/shadcn/ui/Form";
import { Input } from "@components/shadcn/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";

const forbiddenWords = ["욕1", "욕2", "욕3"];

const replySchema = z.object({
	replyComment: z
		.string()
		.min(1, { message: "댓글의 내용을 입력해주세요." })
		.refine((value) => !forbiddenWords.some((word) => value.includes(word)), {
			message: "금지된 단어가 포함되어 있습니다.",
		}),
});

interface ReplyBoxProps {
	onReplyCommentSubmit: (replyComment: string) => void;
	onCommentCancel: () => void;
}

const ReplyBox = ({ onReplyCommentSubmit, onCommentCancel }: ReplyBoxProps) => {
	const form = useForm<z.infer<typeof replySchema>>({
		resolver: zodResolver(replySchema),
	});

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = form;

	const onReplySubmitHandler = (data: z.infer<typeof replySchema>) => {
		showToast({
			type: "success",
			message: "댓글이 성공적으로 작성되었습니다.",
		});
		onReplyCommentSubmit(data.replyComment);
		reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onReplySubmitHandler)}
				className="w-full ml-10 mt-2 flex justify-between items-center"
			>
				<FormField
					name="replyComment"
					control={control}
					render={({ field }) => (
						<FormItem className="w-10/12">
							<FormControl>
								<Input
									{...field}
									type="text"
									className="w-full h-14 border p-2 mr-4 rounded-xl"
									placeholder="댓글 내용을 작성하세요"
								/>
							</FormControl>
							{errors.replyComment && (
								<FormMessage className="text-point-red text-sm mt-1 text-right">
									{errors.replyComment.message as string}
								</FormMessage>
							)}
						</FormItem>
					)}
				/>
				<div className="mt-1 flex space-x-2">
					<Button type="submit">답글 달기</Button>
					<Button type="button" onClick={onCommentCancel}>
						취소
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ReplyBox;
