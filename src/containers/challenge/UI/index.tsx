"use client";

import useUserChallenge from "@stores/UserChallenge/useUserChallenge";

import UserChallenges from "./UserChallenges";

const Challenge = () => {
	const challenges = useUserChallenge((state) => state.challenges);

	return (
		<section>
			<h2 className="font-bold text-xxl">짠맛 수련 챌린지</h2>
			<UserChallenges challenges={challenges} />
		</section>
	);
};

export default Challenge;
