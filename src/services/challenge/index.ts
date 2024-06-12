import { queryOptions } from "@tanstack/react-query";

import getChallenges from "./getChallenges";

const challengeQueryOption = {
	getChallenges: () =>
		queryOptions({
			queryKey: ["challenge", "challenges"],
			queryFn: () => getChallenges(),
		}),
};

export default challengeQueryOption;
