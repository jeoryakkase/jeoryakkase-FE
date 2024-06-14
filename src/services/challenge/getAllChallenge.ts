import apiClient from "@lib/axiosConfig";

import { AllChallenges } from "../../types";

interface AllChallengesProps {
	content: AllChallenges[];
}

export default async function getAllChallenge(size: number) {
	const response = await apiClient.get<AllChallengesProps>(
		`/challenges/all?size=${size}`,
	);
	return response.data;
}
