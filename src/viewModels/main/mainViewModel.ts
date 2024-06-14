import { Goal } from "@components/CardCarousel";

export interface MainGoal {
	goalId: number;
	memberNickName: string;
	goalTitle: string;
	goalRemainingAmount: number;
	goalAchievementRate: number;
	goalDateOfProgress: number;
	goalRemainingPeriod: number;
	goalImage: string;
}

export const transformUserGoal = (goal: MainGoal): Goal => {
	return {
		id: goal.goalId.toString(),
		img: goal.goalImage,
		title: goal.goalTitle,
		percentage: goal.goalAchievementRate,
		leftMoney: goal.goalRemainingAmount,
		dayCount: goal.goalDateOfProgress,
		leftDay: goal.goalRemainingPeriod,
		nickname: goal.memberNickName,
	};
};

export const transformGoals = (goals: MainGoal[]): Goal[] => {
	return goals.map(transformUserGoal);
};

interface StatisticsData {
	dailyCertifications: string[];
	monthlyCertifications: string[];
	monthlyCertificationPercentages: Record<string, number>;
	dailyAmount: number | null;
	monthlyAmount: number | null;
	totalAmount: number | null;
	todayDate: string;
	yearMonth: string;
}

interface TransformedStatistics {
	todayDate: {
		badges: string[];
		savings: number;
	};
	yearMonth: {
		badges: string[];
		totalSavings: number;
	};
	totalSavings: number;
	dailyCertifications: string[];
	monthlyCertifications: string[];
	monthlyCertificationPercentages: Record<string, number>;
}

export const transformStatistics = (
	data: StatisticsData | undefined,
): TransformedStatistics => {
	if (!data) {
		return {
			todayDate: {
				badges: [],
				savings: 0,
			},
			yearMonth: {
				badges: [],
				totalSavings: 0,
			},
			totalSavings: 0,
			dailyCertifications: [],
			monthlyCertifications: [],
			monthlyCertificationPercentages: {},
		};
	}

	const todayBadges =
		data.dailyCertifications.length > 0 ? data.dailyCertifications : [];
	const monthlyBadges =
		data.monthlyCertifications.length > 0 ? data.monthlyCertifications : [];

	return {
		todayDate: {
			badges: todayBadges,
			savings: data.dailyAmount ?? 0,
		},
		yearMonth: {
			badges: monthlyBadges,
			totalSavings: data.monthlyAmount ?? 0,
		},
		totalSavings: data.totalAmount ?? 0,
		dailyCertifications: data.dailyCertifications ?? [],
		monthlyCertifications: data.monthlyCertifications ?? [],
		monthlyCertificationPercentages: data.monthlyCertificationPercentages,
	};
};
