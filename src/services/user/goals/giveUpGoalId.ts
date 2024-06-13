import apiClient from "@lib/axiosConfig";

export default async function giveUpGoalId({ goalId }: { goalId: number }) {
	const response = await apiClient.patch(`/goals/${goalId}`);
	return response.data;
}
