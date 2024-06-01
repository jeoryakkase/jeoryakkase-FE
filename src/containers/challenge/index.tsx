"use client";

import useUserChallenge from "@stores/UserChallenge/useUserChallenge";

import { allChallenge, hotChallenge } from "./dummy/index";
import PreviewAllChallenge from "./UI/AllChallenge/UI/PreviewAllChallenge";
import HotChallenge from "./UI/HotChallenge";
import UserChallenges from "./UI/UserChallenges";

const Challenge = () => {
	const challenges = useUserChallenge((state) => state.challenges);

	return (
		<section>
			<UserChallenges challenges={challenges} />
			<PreviewAllChallenge allChallenge={allChallenge} />
			<HotChallenge hotChallenges={hotChallenge} />
		</section>
	);
};

export default Challenge;
