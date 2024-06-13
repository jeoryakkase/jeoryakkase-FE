import {
	ChallengeDetail,
	ChallengeInfoBoxProps,
	UserChallenges,
} from "@containers/challenge/types";
import { Challenge } from "@containers/challenge/UI/HotChallenge";
import showToast from "@lib/toastConfig";

import {
	AllChallenges,
	ChallengesJoined,
	MemberChallengesJoined,
} from "../../types";

export interface ChallengeInfo {
	id: number;
	challengeTitle: string;
	challengeDesc: string;
	challengeGoal: number;
	challengeCount: number;
	challengeType: string;
	challengeTerm: string;
	challengeDifficulty: string;
	authContent: string;
	badgeDto: {
		name: string;
		badgeImage: string;
		badgeDesc: string;
		badgeType: string;
	};
}

export interface ChallengeDetailInfo extends MemberChallengesJoined {
	challengeDto: ChallengeInfo;
}

export const transformChallenges = (
	userChallengeData: ChallengesJoined[],
): UserChallenges[] => {
	if (!userChallengeData) return [];

	return userChallengeData.map((userChallenge) => ({
		id: userChallenge.id.toString(),
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
		id: hotChallenge.id.toString(),
		title: hotChallenge.challengeTitle,
		imgs: hotChallenge.badgeDto.badgeImage,
		description: hotChallenge.authContent,
		messages: hotChallenge.authContent,
	}));
};

export const transformChallengeInfoWithData = (
	challengeInfos: ChallengeDetailInfo,
): ChallengeDetail => {
	return {
		challengeId: challengeInfos.id.toString(),
		info: {
			title: challengeInfos.challengeDto.challengeTitle,
			image: challengeInfos.challengeDto.badgeDto.badgeImage,
			info: [
				challengeInfos.challengeDto.challengeTerm,
				challengeInfos.challengeDto.authContent,
				challengeInfos.challengeDto.challengeDifficulty,
			],
			detail: challengeInfos.challengeDto.challengeDesc,
			isJoined: challengeInfos.isTodayCertification,
			percentage: 0,
			// leftDay: ,
			progressDay: challengeInfos.effectiveDate,
			dayCount: challengeInfos.challengeDto.challengeCount,
		},
		joinedCounts: 0,
	};
};

export const transformChallengeInfo = (
	challengeInfo: ChallengeInfo | undefined,
): ChallengeInfoBoxProps | null => {
	if (!challengeInfo) {
		showToast({ type: "error", message: "존재하지 않는 챌린지 입니다." });
		return null;
	}
	return {
		challengeId: challengeInfo.id.toString(),
		info: {
			title: challengeInfo.challengeTitle,
			image: challengeInfo.badgeDto.badgeImage,
			info: [
				challengeInfo.challengeTerm,
				challengeInfo.authContent,
				challengeInfo.challengeDifficulty,
			],
			detail: challengeInfo.challengeDesc,
			percentage: 0,
			// leftDay: ,
			dayCount: challengeInfo.challengeCount,
			badgeName: challengeInfo.badgeDto.name,
			badgeDescription: challengeInfo.badgeDto.badgeDesc,
		},
	};
};
