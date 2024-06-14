import { MainGoal } from "src/viewModels/main/mainViewModel";

import apiClient from "@lib/axiosConfig";

export default async function getUserGoal() {
	const response = await apiClient.get<MainGoal[]>("/goals/status");
	return response.data;
}
