import { queryOptions } from "@tanstack/react-query";

import getMemberChallenges from "./getMemberChallenges";

const memberChallengesQueryOption = {
	getMemberChallenges: () =>
		queryOptions({
			queryKey: ["memberChallenges"],
			queryFn: () => getMemberChallenges(),
		}),
};

export default memberChallengesQueryOption;
