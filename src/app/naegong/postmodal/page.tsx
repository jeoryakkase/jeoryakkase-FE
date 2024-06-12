"use client";

import { useEffect, useState } from "react";

import NaegongPostModal from "@containers/naegong/UI/NaegongPostModal";
import UserInfoGoalPage from "@app/userinfo/[goalId]/page";

const NaegongPostModalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return (
		<>
			{isOpen && <NaegongPostModal />}
			<UserInfoGoalPage />
		</>
	);
};

export default NaegongPostModalPage;
