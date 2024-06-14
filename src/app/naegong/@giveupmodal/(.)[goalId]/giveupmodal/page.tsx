"use client";

import { useEffect, useState } from "react";

import NaegongGiveUpModal from "@containers/naegong/UI/NaegongGiveUpModal";

const NaegongGiveUpModalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return <div>{isOpen && <NaegongGiveUpModal />}</div>;
};

export default NaegongGiveUpModalPage;
