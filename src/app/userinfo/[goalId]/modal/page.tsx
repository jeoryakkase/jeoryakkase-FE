"use client";

import { useEffect, useState } from "react";

import UrlModal from "@components/UrlModal";

import UserInfoGoalPage from "../page";

const UserInfoGoalPageModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<>
			{isOpen && <UrlModal />}
			<UserInfoGoalPage />
		</>
	);
};

export default UserInfoGoalPageModal;
