import { queryOptions } from "@tanstack/react-query";

import getGoals from "./getGoals";

const goalsQueryOption = {
	getGoals: () =>
		queryOptions({
			queryKey: ["getGoals"],
			queryFn: () => getGoals(),
		}),
};

export default goalsQueryOption;
