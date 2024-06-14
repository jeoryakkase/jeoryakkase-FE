import apiClient from "@lib/axiosConfig";

export default async function postCertifyChallenge(
	challengeId: number,
	certify: FormData,
) {
	const response = await apiClient.post(
		`members/challenges/${challengeId}/certify`,
		certify,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		},
	);
	return response.data;
}
