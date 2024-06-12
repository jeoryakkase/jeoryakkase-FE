"use client";

import { useState } from "react";

import ChallengeCertificateModal from "@containers/challenge/UI/ChallengeDetail/UI/ChallengeCertificateModal";

// import { useParams, useRouter } from "next/navigation";

// import ModalSadContent from "@components/ModalSadContent";

const ChallengeCertificate = () => {
	// const router = useRouter();
	// const { challengeId } = useParams();
	// const challengeModalContent = "포기";
	// const challengeModalSubText = "포기하시면 어쩌구저쩌구";
	// const handleButtonAction = () => {
	// 	router.replace(`/challenge/${challengeId}`);
	// };
	const [isOpen, setIsOpen] = useState(false);

	return <ChallengeCertificateModal isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default ChallengeCertificate;
