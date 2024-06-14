"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";
import ModalForm from "@components/ModalForm";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@components/shadcn/ui/Form";
import UrlModal from "@components/UrlModal";
import {
	NaegongDefault,
	NaegongValidation,
} from "@containers/naegong/UI/NaegongValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";
import postGoals from "@services/user/goals/postGoals";
import { useMutation } from "@tanstack/react-query";

const GoalCertificationPostModal = () => {
	const form = useForm<z.infer<typeof NaegongValidation>>({
		resolver: zodResolver(NaegongValidation),
		defaultValues: NaegongDefault,
	});
	const { mutate } = useMutation({
		mutationFn: postGoals,
		onSuccess: () => {
			showToast({
				type: "success",
				message: "인증이 완료되었습니다.",
			});
			router.push("/naegong");
		},
		onError: () => {
			showToast({
				type: "error",
				message: "인증에 실패하였습니다.",
			});
		},
	});

	const onSubmit = (data: z.infer<typeof NaegongValidation>) => {
		const formData = new FormData();
		if (data.goalImage instanceof File) {
			formData.append("image", data.goalImage);
		}

		const goalCreateReqDto = {
			goalTitle: data.goalTitle,
			goalAmount: data.goalAmount,
			goalStartDate: data.goalStartDate,
			goalEndDate: data.goalEndDate,
		};

		formData.append("goalCreateReqDto", JSON.stringify(goalCreateReqDto));
		mutate(formData);
	};
	const router = useRouter();
	return (
		<Form {...form}>
			<UrlModal title="목표작성">
				<ModalForm
					className=" flex gap-[40px] flex-col"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="goalTitle"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<ModalForm.Input title="목표 제목" type="text" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="goalAmount"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<ModalForm.Input title="목표 금액" type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="goalImage"
						render={({ field: { onChange } }) => (
							<FormItem>
								<FormControl>
									<ModalForm.ImgInput
										title="목표 이미지"
										id="goalImage"
										setPreviewImageData={onChange}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<ModalForm.Container title="목표날짜">
						<div className="flex gap-[10px] items-center">
							<FormField
								control={form.control}
								name="goalStartDate"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ModalForm.ModalDate
												value={field.value}
												onChange={(date) => field.onChange(date)}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>{" "}
							<div>~ </div>
							<FormField
								control={form.control}
								name="goalEndDate"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<ModalForm.ModalDate
												value={field.value}
												onChange={(date) => field.onChange(date)}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</ModalForm.Container>
					<div>
						<Button type="submit">확인</Button>

						<Button
							type="button"
							bgColor="lightyellow"
							onClick={() => router.back()}
						>
							취소
						</Button>
					</div>
				</ModalForm>
			</UrlModal>
		</Form>
	);
};

export default GoalCertificationPostModal;
