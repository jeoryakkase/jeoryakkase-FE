import { ChallengeInfo } from "src/viewModels/challenge/challengesViewModel";

import apiClient from "@lib/axiosConfig";

export default async function getChallengeInfo({
	challengeId,
}: {
	challengeId: number;
}) {
	const response = await apiClient.get<ChallengeInfo>(
		`/challenges/${challengeId}`,
	);
	return response.data;
}
