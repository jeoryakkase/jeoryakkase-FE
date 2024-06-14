"use client";

import { useRouter } from "next/navigation";

import ChallengeDetail from "@containers/challenge/UI/ChallengeDetail";
import showToast from "@lib/toastConfig";
import useAuthStore from "@stores/Auth/useUserAuth";

const ChallengeDetailPage = () => {
	const router = useRouter();
	const { isLogined } = useAuthStore();

	if (!isLogined) {
		showToast({
			type: "info",
			message: "해당 서비스는 로그인이 필요합니다",
		});
		router.push("/login");
	}

	return <ChallengeDetail />;
};

export default ChallengeDetailPage;
