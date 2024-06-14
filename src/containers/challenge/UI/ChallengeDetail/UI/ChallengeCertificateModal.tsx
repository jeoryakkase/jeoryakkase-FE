"use client";

import { useEffect, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";
import ModalForm from "@components/ModalForm";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@components/shadcn/ui/Form";
import UrlModal from "@components/UrlModal";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";
import postCertifyChallenge from "@services/challenge/postCertifyChallenge";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
	recordFormDefault,
	recordModalValidation,
} from "../recordModalValidation";

const ChallengeCertificateModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const params = useSearchParams();
	const memberId = params ? params.get("memeberChallengeId") : null;
	const numberMemberId = Number(memberId);

	const queryClient = useQueryClient();

	useEffect(() => {
		setIsOpen(true);
	}, []);

	const { mutate: RecordCertificateMutate } = useMutation({
		mutationFn: (certify: FormData) =>
			postCertifyChallenge(numberMemberId, certify),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["challengeInfo", "challengeInfos"],
			});
			showToast({
				type: "success",
				message: "챌린지 기록이 성공적으로 저장되었습니다.",
			});
			router.back();
		},
		onError: () => {
			showToast({ type: "error", message: "챌린지 기록에 실패했습니다." });
		},
	});

	const form = useForm<z.infer<typeof recordModalValidation>>({
		resolver: zodResolver(recordModalValidation),
		defaultValues: recordFormDefault,
	});

	const { watch } = form;
	const uploadFile = watch("uploadFile");

	const onCertificateSubmit = (data: z.infer<typeof recordModalValidation>) => {
		console.log("폼 데이터:", data);
		const ChallengeModalformData = new FormData();
		console.log(uploadFile);
		if (uploadFile) {
			const file = uploadFile;
			ChallengeModalformData.append("uploadFiles", file);
		}
		const certificationChallengeReqDto = {
			saveMoney: data.saveMoney,
			content: data.content,
		};
		ChallengeModalformData.append(
			"certificationChallengeReqDto",
			new Blob([JSON.stringify(certificationChallengeReqDto)], {
				type: "application/json",
			}),
		);
		RecordCertificateMutate(ChallengeModalformData);
	};

	const handleClose = () => {
		router.back();
	};

	return (
		<Form {...form}>
			<UrlModal isOpen={isOpen} title="챌린지 인증글 작성">
				<ModalForm onSubmit={form.handleSubmit(onCertificateSubmit)}>
					<FormField
						control={form.control}
						name="uploadFile"
						render={({ field: { onChange } }) => (
							<FormItem className="w-10/12">
								<FormControl>
									<ModalForm.ImgInput
										title="사진 업로드"
										setPreviewImageData={onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="saveMoney"
						render={({ field }) => (
							<FormItem className="w-10/12">
								<FormLabel>절약한 금액</FormLabel>
								<FormControl>
									<ModalForm.Input
										{...field}
										onChange={(e) => field.onChange(Number(e.target.value))}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem className="w-10/12">
								<FormLabel>내용</FormLabel>
								<FormControl>
									<ModalForm.Textarea {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="mt-10">
						<Button type="submit">인증완료</Button>
						<Button type="button" bgColor="lightyellow" onClick={handleClose}>
							{" "}
							취소
						</Button>
					</div>
				</ModalForm>
			</UrlModal>
		</Form>
	);
};

export default ChallengeCertificateModal;
