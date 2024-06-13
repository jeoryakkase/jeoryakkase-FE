import apiClient from "@lib/axiosConfig";

export default async function postRecordCertificate(userChallengeId: number) {
	const response = await apiClient.post(
		`members/challenges/${userChallengeId}/certify`,
	);
	return response.data;
}
