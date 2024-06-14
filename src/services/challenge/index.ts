import getMemberChallenges from "@services/user/challenges/getMemberChallenges";
import { queryOptions } from "@tanstack/react-query";

import getAllChallenge from "./getAllChallenge";
import getChallengeDetail from "./getChallengeDetail";
import getChallengeFeed from "./getChallengeFeed";
import getChallengeInfo from "./getChallengeInfo";
import getChallenges from "./getChallenges";

const challengeQueryOption = {
	getChallenges: () =>
		queryOptions({
			queryKey: ["challenge", "challenges"],
			queryFn: () => getChallenges(),
		}),

	getAllChallenges: () =>
		queryOptions({
			queryKey: ["allChallenge", "allChallengeList"],
			queryFn: () => getAllChallenge(20),
		}),
	getChallengeDetail: ({ challengeId }: { challengeId: number }) =>
		queryOptions({
			queryKey: ["challengeInfo", "challenge"],
			queryFn: () => getChallengeDetail({ challengeId }),
		}),

	getChallengeInfo: ({ challengeId }: { challengeId: number }) =>
		queryOptions({
			queryKey: ["challengeInfo", "challengeInfos"],
			queryFn: () => getChallengeInfo({ challengeId }),
		}),

	getChallengeFeed: ({ challengeId }: { challengeId: number }) =>
		queryOptions({
			queryKey: ["challengeFeed", "challenge", "challengeInfo"],
			queryFn: () => getChallengeFeed({ challengeId }),
		}),

	getMemberChallenge: () =>
		queryOptions({
			queryKey: ["memberChallenge", "memberChallenges"],
			queryFn: () => getMemberChallenges(),
		}),
};

export default challengeQueryOption;
