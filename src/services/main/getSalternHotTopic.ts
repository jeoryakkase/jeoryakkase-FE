import apiClient from "@lib/axiosConfig";

interface SalternHotTopicProps {
	goalId: number;
	memberNickName: string;
	goalTitle: string;
	goalRemainingAmount: number;
	goalAchievementRate: number;
	goalDateOfProgress: number;
	goalRemainingPeriod: number;
}

export default async function getSalternHotTopic() {
	const response = await apiClient.get<SalternHotTopicProps>("/goals/status");
	return response.data;
}
