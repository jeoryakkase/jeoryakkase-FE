import apiClient from "@lib/axiosConfig";

const getMemberChallenges = async () => {
	const response = await apiClient.get(`/members/challenges`);
	return response.data;
};

export default getMemberChallenges;
