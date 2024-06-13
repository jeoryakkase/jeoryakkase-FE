"use client";

import { useEffect, useState } from "react";

import NaegongPostModal from "@containers/naegong/UI/NaegongPostModal";

const NaegongPostModalPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(true);
	}, []);

	return <div>{isOpen && <NaegongPostModal />}</div>;
};

export default NaegongPostModalPage;
