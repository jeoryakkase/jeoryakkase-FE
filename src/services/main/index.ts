import { queryOptions } from "@tanstack/react-query";

import getSalternHotTopic from "./getSalternHotTopic";
import getUserGoal from "./getUserGoal";
import getUserStatistics from "./getUserStatistics";

const mainQueryOption = {
	getUserGoal: () =>
		queryOptions({
			queryKey: ["userGoal", "userGoals"],
			queryFn: () => getUserGoal(),
		}),

	getUserStatistics: () =>
		queryOptions({
			queryKey: ["userStatistic", "userStatistics"],
			queryFn: () => getUserStatistics(),
		}),

	getSalternHotTopic: () =>
		queryOptions({
			queryKey: ["salternTopic", "salternHotToic"],
			queryFn: () => getSalternHotTopic(),
		}),

	// getAllChallenges: () =>
	// 	queryOptions({
	// 		queryKey: ["allChallenge", "allChallengeList"],
	// 		queryFn: () => getAllChallenge(20),
	// 	}),
	// getChallengeDetail: ({ challengeId }: { challengeId: number }) =>
	// 	queryOptions({
	// 		queryKey: ["challengeInfo", "challenge"],
	// 		queryFn: () => getChallengeDetail({ challengeId }),
	// 	}),

	// getChallengeInfo: ({ challengeId }: { challengeId: number }) =>
	// 	queryOptions({
	// 		queryKey: ["challengeInfo", "challengeInfos"],
	// 		queryFn: () => getChallengeInfo({ challengeId }),
	// 	}),

	// getChallengeFeed: ({ challengeId }: { challengeId: number }) =>
	// 	queryOptions({
	// 		queryKey: ["challengeFeed", "challenge", "challengeInfo"],
	// 		queryFn: () => getChallengeFeed({ challengeId }),
	// 	}),

	// getMemberChallenges
};

export default mainQueryOption;
