import apiClient from "@lib/axiosConfig";

const putRepresentBage = async (badgeName: string) => {
	const response = await apiClient.put(
		`/members/challenges/badges?badgeName=${badgeName}`,
	);
	return response.data;
};

export default putRepresentBage;
