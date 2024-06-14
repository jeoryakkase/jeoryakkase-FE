import apiClient from "@lib/axiosConfig";

interface StatisticsProps {
	dailyCertifications: [string];
	monthlyCertifications: [string];
	monthlyCertificationPercentages: {
		additionalProp1: 0;
		additionalProp2: 0;
		additionalProp3: 0;
	};
	dailyAmount: 0;
	monthlyAmount: 0;
	totalAmount: 0;
	todayDate: string;
	yearMonth: string;
}

export default async function getUserStatistics() {
	const response = await apiClient.get<StatisticsProps>(
		"/goals/certifications/statistics",
	);
	return response.data;
}
