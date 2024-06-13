import { ChallengeDetailInfo } from "src/viewModels/challenge/challengesViewModel";

import apiClient from "@lib/axiosConfig";

export default async function getChallengeDetail({
	challengeId,
}: {
	challengeId: number;
}) {
	const response = await apiClient.get<ChallengeDetailInfo>(
		`members/challenges/${challengeId}?challengeId=${challengeId}`,
	);
	return response.data;
}
