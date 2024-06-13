import apiClient from "@lib/axiosConfig";

const getMemberChalllengesBadges = async (IsRepresentative: boolean) => {
	const response = await apiClient.get(
		`/members/challenges/badges?IsRepresentative=${IsRepresentative}`,
	);
	return response.data;
};

export default getMemberChalllengesBadges;
