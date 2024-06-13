import apiClient from "@lib/axiosConfig";

export default async function postJoinChallenge(challengeId: number) {
	const response = await apiClient.post(`members/challenges/${challengeId}`);
	return response.data;
}
