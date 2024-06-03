import { format, subMonths } from "date-fns";

export const getFullDate = (date: Date, joiner = ".") => {
	return format(date, `yyyy${joiner}MM${joiner}dd`);
};

export const getLastMonth = (date: Date, joiner = ".") => {
	const lastMonthDate = subMonths(date, 1);
	return format(lastMonthDate, `yyyy${joiner}MM`);
};
