import apiClient from "@lib/axiosConfig";

const getGoals = async () => {
	const response = await apiClient.get(`/goals`);
	return response.data;
};

export default getGoals;
