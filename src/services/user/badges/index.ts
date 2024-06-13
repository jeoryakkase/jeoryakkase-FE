import { queryOptions } from "@tanstack/react-query";

import getMemberChalllengesBadges from "./getMemberChalllengesBadges";

const memberBadgesQueryOption = {
	getMemberChallengesBadges: (IsRepresentative: boolean) =>
		queryOptions({
			queryKey: IsRepresentative ? ["representativeBadges"] : ["generalBadges"], // true면 대표, false면 일반
			queryFn: () => getMemberChalllengesBadges(IsRepresentative),
		}),
};

export default memberBadgesQueryOption;
