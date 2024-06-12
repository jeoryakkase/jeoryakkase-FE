"use client";

import { useEffect, useState } from "react";

import UserInfoGoalPage from "@app/userinfo/[goalId]/page";
import NaegongGiveUpModal from "@containers/naegong/UI/NaegongGiveUpModal";

const NaegongGiveUpModalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return <>{isOpen && <NaegongGiveUpModal />}</>;
};

export default NaegongGiveUpModalPage;
