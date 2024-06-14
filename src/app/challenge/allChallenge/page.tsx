import { transformAllChallenges } from "src/viewModels/challenge/challengesViewModel";

import { allChallenge } from "@containers/challenge/dummy";
import AllChallenge from "@containers/challenge/UI/AllChallenge";
import challengeQueryOption from "@services/challenge";
import { useQuery } from "@tanstack/react-query";

const AllChallengePage = () => {
	const { data: allChallengeData } = useQuery(
		challengeQueryOption.getAllChallenges(),
	);

	const allChallenge = transformAllChallenges(
		allChallengeData.challengesReadResDto,
	);

	return <AllChallenge allChallenge={allChallenge} />;
};

export default AllChallengePage;
