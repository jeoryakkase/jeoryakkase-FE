import apiClient from "@lib/axiosConfig";

import { AllChallenges } from "../../types";

interface ChallengesProps {
	memberChallengesJoinResDto: ChallengesJoined[];
	challengesReadResDto: AllChallenges[];
	challengesPopularityReadResDto: AllChallenges[];
}

export default async function getMemeberChallenge() {
	const response = await apiClient.get<ChallengesProps>("/challenges");
	return response.data;
}
