"use client";

import { useEffect } from "react";

import { useParams, usePathname, useRouter } from "next/navigation";

import Modal from "@components/Modal";
import ModalForm from "@components/ModalForm";

const ChallengeCertificateModal = ({ isOpen, setIsOpen }) => {
	const router = useRouter();
	const { challengeId } = useParams();
	const pathname = usePathname();

	const onCertificateSubmit = () => {
		console.log("인증");
	};

	const handleClose = () => {
		setIsOpen(false);
		router.replace(`/challenge/${challengeId}`);
	};
	useEffect(() => {
		if (pathname.endsWith("/record")) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [pathname]);

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={setIsOpen}
			button="등록"
			closeButton="취소"
			closeAction={handleClose}
		>
			<ModalForm onSubmit={onCertificateSubmit}>
				<ModalForm.Container title="인증 글 작성">
					<ModalForm.ImgInput title="사진 업로드" />
					<ModalForm.Input title="절약한 금액" />
					<ModalForm.Textarea title="내용" />
				</ModalForm.Container>
			</ModalForm>
		</Modal>
	);
};

export default ChallengeCertificateModal;
