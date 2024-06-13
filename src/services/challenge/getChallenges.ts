import apiClient from "@lib/axiosConfig";

import { AllChallenges, ChallengesJoined } from "../../types";

interface ChallengesProps {
	memberChallengesJoinResDto: ChallengesJoined[];
	challengesReadResDto: AllChallenges[];
	challengesPopularityReadResDto: AllChallenges[];
}

export default async function getChallenges() {
	const response = await apiClient.get<ChallengesProps>("/challenges");
	return response.data;
}
