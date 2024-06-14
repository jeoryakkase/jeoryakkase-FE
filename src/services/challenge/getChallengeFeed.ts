import apiClient from "@lib/axiosConfig";

import { ChallengeCertification } from "../../types";

export default async function getChallengeFeed({
	challengeId,
}: {
	challengeId: number;
}) {
	const response = await apiClient.get<ChallengeCertification>(
		`/challenges/${challengeId}/certify`,
	);
	return response.data;
}
