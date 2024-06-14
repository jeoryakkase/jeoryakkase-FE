import apiClient from "@lib/axiosConfig";

import { AllChallenges, ChallengesJoined } from "../../types";

interface MemberChallengesProps extends ChallengesJoined {
	challengeDto: AllChallenges;
}

export default async function getMemeberChallenge() {
	const response =
		await apiClient.get<MemberChallengesProps[]>("members/challenges");
	return response.data;
}
