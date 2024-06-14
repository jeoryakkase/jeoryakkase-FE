"use client";

import { transformAllChallenges } from "src/viewModels/challenge/challengesViewModel";

import AllChallenge from "@containers/challenge/UI/AllChallenge";
import challengeQueryOption from "@services/challenge";
import { useQuery } from "@tanstack/react-query";

const AllChallengePage = () => {
	const { data: allChallengeData } = useQuery(
		challengeQueryOption.getAllChallenges(),
	);
	const allChallenge = allChallengeData
		? transformAllChallenges(allChallengeData.content)
		: [];

	return <AllChallenge allChallenge={allChallenge} />;
};

export default AllChallengePage;
