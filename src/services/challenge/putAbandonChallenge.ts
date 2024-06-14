import apiClient from "@lib/axiosConfig";

export default async function putAbandonChallenge(userChallengeId: number) {
	const response = await apiClient.put(
		`members/challenges/${userChallengeId}/abandon`,
	);
	return response.data;
}
