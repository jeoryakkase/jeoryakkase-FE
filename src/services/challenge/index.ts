import { queryOptions } from "@tanstack/react-query";

import getAllChallenge from "./getAllChallenge";
import getChallengeDetail from "./getChallengeDetail";
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
			queryFn: () => getAllChallenge(),
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
	// getMemberChallenges
};

export default challengeQueryOption;
