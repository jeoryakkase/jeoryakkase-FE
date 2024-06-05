"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

const SalternIndex = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("/saltern/vote");
	}, [router]);

	return null;
};

export default SalternIndex;
