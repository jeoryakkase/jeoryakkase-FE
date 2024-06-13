import apiClient from "@lib/axiosConfig";

const getGoalsCertifications = async (goalId: number) => {
	const response = await apiClient.get(`/goals/${goalId}/certifications`);
	return response.data;
};

export default getGoalsCertifications;
