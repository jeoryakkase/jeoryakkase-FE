"use client";

import { useParams } from "next/navigation";
// import { useParams, useRouter } from "next/navigation";

import ChallengeDetail from "@containers/challenge/UI/ChallengeDetail";
// import showToast from "@lib/toastConfig";
// import useAuthStore from "@stores/Auth/useUserAuth";

const ChallengeDetailPage = () => {
	// const router = useRouter();
	const { challengeId } = useParams();
	// const { isLogined } = useAuthStore();

	// if (!isLogined) {
	// 	showToast({
	// 		type: "info",
	// 		message: "해당 서비스는 로그인이 필요합니다",
	// 	});
	// 	router.push("/login");
	// }

	return (
		<div>
			<h1>디테일 페이지로 이동</h1>
			<p>Challenge ID: {challengeId}</p>
			<ChallengeDetail />
		</div>
	);
};

export default ChallengeDetailPage;
