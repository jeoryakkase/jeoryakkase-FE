import { ChallengeInfo } from "src/viewModels/challenge/challengesViewModel";

import apiClient from "@lib/axiosConfig";

interface AllChallengesProps {
	content: ChallengeInfo[];
}

export default async function getAllChallenge() {
	const response = await apiClient.get<AllChallengesProps>("/challenges/all");
	return response.data;
}
