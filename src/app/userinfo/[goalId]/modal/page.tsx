"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import UrlModal from "@components/UrlModal";

import UserInfoGoalPage from "../page";

const UserInfoGoalPageModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<>
			{isOpen && (
				<UrlModal
					title="제목"
					button="확인"
					buttonAction={() => router.back()}
					closeButton="취소"
				>
					내용
				</UrlModal>
			)}
			<UserInfoGoalPage />
		</>
	);
};

export default UserInfoGoalPageModal;
