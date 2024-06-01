"use client";

import { useParams } from "next/navigation";

import ChallengeDetail from "@containers/challenge/UI/ChallengeDetail";

const ChallengeDetailPage = () => {
	const { challengeId } = useParams();

	return (
		<div>
			<h1>디테일 페이지로 이동</h1>
			<p>Challenge ID: {challengeId}</p>
			<ChallengeDetail />
		</div>
	);
};

export default ChallengeDetailPage;
