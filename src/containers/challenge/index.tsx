"use client";

import {
	transformAllChallenges,
	transformChallenges,
} from "src/viewModels/challenge/challengesViewModel";

import challengeQueryOption from "@services/challenge";
import { useQuery } from "@tanstack/react-query";

import PreviewAllChallenge from "./UI/AllChallenge/UI/PreviewAllChallenge";
import HotChallenge from "./UI/HotChallenge";
import UserChallenges from "./UI/UserChallenges";

const Challenge = () => {
	// const challenges = useUserChallenge((state) => state.challenges);
	const { data: challengeData } = useQuery(
		challengeQueryOption.getChallenges(),
	);
	console.log(challengeData);

	if (!challengeData) {
		return null;
	}

	const challenges = transformChallenges(
		challengeData?.memberChallengesJoinResDto,
	);

	const allChallenge = transformAllChallenges(
		challengeData.challengesReadResDto,
	);

	const hotChallenges = transformAllChallenges(
		challengeData.challengesPopularityReadResDto,
	);

	return (
		<section>
			{challengeData.memberChallengesJoinResDto && (
				<UserChallenges challenges={challenges} />
			)}
			<PreviewAllChallenge allChallenge={allChallenge} />
			<HotChallenge hotChallenges={hotChallenges} />
		</section>
	);
};

export default Challenge;
