import { Challenge } from "@containers/challenge/UI/HotChallenge";
import { UserChallenge } from "@stores/UserChallenge/useUserChallenge";

import { AllChallenges, ChallengesJoined } from "../../types";

export const transformChallenges = (
	userChallengeData: ChallengesJoined[],
): UserChallenge[] => {
	return userChallengeData.map((userChallenge) => ({
		id: userChallenge.challengeId,
		title: userChallenge.challengeTtile,
		description: userChallenge.challengeTerm,
		imgs: userChallenge.certificationChallengeDto.certificationChallengeImageDtos.map(
			(img) => ({
				id: img.id,
				img: img.imageUrl,
			}),
		),
		startDate: userChallenge.startDate,
		endDate: userChallenge.endDate,
		today: userChallenge.isTodayCertification,
		countDay: userChallenge.effectiveDate,
	}));
};

export const transformAllChallenges = (
	allChallengeData: AllChallenges[],
): Challenge[] => {
	return allChallengeData.map((hotChallenge) => ({
		id: hotChallenge.challengeId,
		title: hotChallenge.challengeTitle,
		imgs: hotChallenge.badgeDto.badgeImage.map((badgeImg) => ({
			id: badgeImg.id,
			img: badgeImg.imageUrl,
		})),
		description: hotChallenge.authContent,
		messages: hotChallenge.authContent,
	}));
};
