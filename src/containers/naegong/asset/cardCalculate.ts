import { differenceInDays } from "date-fns";

const formatGoalAmount = (amount) => amount.toLocaleString();

const calculateDaysLeft = (start, end) => {
	const now = new Date();
	const endDate = new Date(end);
	const diff = differenceInDays(endDate, now);
	return diff >= 0 ? `D-${diff}` : `D+${Math.abs(diff)}`;
};

export { formatGoalAmount, calculateDaysLeft };
