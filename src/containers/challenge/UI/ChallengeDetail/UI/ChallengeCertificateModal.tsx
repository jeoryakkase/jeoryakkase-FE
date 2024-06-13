"use client";

import { useParams, useRouter } from "next/navigation";
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
import putAbandonChallenge from "@services/challenge/putAbandonChallenge";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
	recordFormDefault,
	recordModalValidation,
} from "../recordModalValidation";

const ChallengeCertificateModal = () => {
	const router = useRouter();
	const { challengeId } = useParams();
	const NumbChallengeId = Number(challengeId);
	const queryClient = useQueryClient();

	const { mutate: RecordCertificateMutate } = useMutation({
		mutationFn: () => putAbandonChallenge({ userChallengeId: NumbChallengeId }),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["challengeInfo", "challengeInfos"],
			});
		},
		onError: () => {
			showToast({ type: "error", message: "챌린지 기록에 실패했습니다." });
		},
	});

	const onCertificateSubmit = () => {
		RecordCertificateMutate();
	};

	const handleClose = () => {
		router.replace(`/challenge/${challengeId}`);
	};

	const form = useForm<z.infer<typeof recordModalValidation>>({
		resolver: zodResolver(recordModalValidation),
		defaultValues: recordFormDefault,
	});

	return (
		<Form {...form}>
			<UrlModal title="챌린지 인증글 작성">
				<ModalForm onSubmit={form.handleSubmit(onCertificateSubmit)}>
					<FormField
						control={form.control}
						name="uploadFiles"
						render={({ field }) => (
							<FormItem className="w-10/12">
								<FormControl>
									<ModalForm.ImgInput title="사진 업로드" {...field} />
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
									<ModalForm.Input {...field} />
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
