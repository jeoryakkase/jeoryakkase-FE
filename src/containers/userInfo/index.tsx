"use client";

import userQueryOption from "@services/user";
import memberBadgesQueryOption from "@services/user/badges";
import { useQuery } from "@tanstack/react-query";

import BadgeCollection from "./UI/BadgeCollection";
import ChallengeHistory from "./UI/ChallengeHistory";
import Introduction from "./UI/Introduction";
import ProgressGoal from "./UI/ProgressGoal";
import SaltTipsStorage from "./UI/SaltTipsStorage";

const UserInfo = () => {
	const { data: userInfo } = useQuery({
		...userQueryOption.getUserInfo(),
	});

	const { data: representativeBadges } = useQuery({
		...memberBadgesQueryOption.getMemberChallengesBadges(true),
	});
	const { data: generalBadges } = useQuery({
		...memberBadgesQueryOption.getMemberChallengesBadges(false),
	});
	console.log("userInfo", userInfo);
	console.log("representativeBadges", representativeBadges);
	console.log("generalBadges", generalBadges);
	return (
		<div>
			<Introduction
				nickname={userInfo?.nickname}
				profileImage={userInfo?.profileImage}
				about={userInfo?.about}
				representativeBadge={representativeBadges}
				generalBadges={generalBadges}
			/>
			<BadgeCollection memberbadges={generalBadges} />
			<ProgressGoal goals={userInfo?.goals} />
			<ChallengeHistory challenges={userInfo?.memberChallenges} />
			<SaltTipsStorage bookmarks={userInfo?.bookmarks} />
		</div>
	);
};

export default UserInfo;
