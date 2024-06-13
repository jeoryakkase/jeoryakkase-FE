import { queryOptions } from "@tanstack/react-query";

import getGoals from "./getGoals";
import getGoalsCertifications from "./getGoalsCertifications";

const goalsQueryOption = {
	getGoals: () =>
		queryOptions({
			queryKey: ["getGoals"],
			queryFn: () => getGoals(),
		}),
	getGoalsCertifications: (goalId: number) =>
		queryOptions({
			queryKey: ["goalsCertifications"],
			queryFn: () => getGoalsCertifications(goalId),
		}),
};

export default goalsQueryOption;
