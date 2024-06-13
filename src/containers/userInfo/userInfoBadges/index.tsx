"use client";

import memberBadgesQueryOption from "@services/user/badges";
import { useQuery } from "@tanstack/react-query";

import ChallengeBadges from "./UI/ChallengeBadges";
import GoalBadges from "./UI/GoalBadges";

const UserInfoBadges = () => {
	const { data: generalBadges } = useQuery({
		...memberBadgesQueryOption.getMemberChallengesBadges(false),
	});
	return (
		<div>
			<ChallengeBadges memberbadges={generalBadges} />
			{/* 목표는 추가해야함 */}
			<GoalBadges />
		</div>
	);
};

export default UserInfoBadges;
