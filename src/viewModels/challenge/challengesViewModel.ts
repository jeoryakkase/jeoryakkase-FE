import {
	ChallengeDetail,
	ChallengeInfoBoxProps,
	FeedData,
	UserChallenges,
} from "@containers/challenge/types";
import { Challenge } from "@containers/challenge/UI/HotChallenge";

import {
	AllChallengeList,
	AllChallenges,
	ChallengeCertification,
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
		imgs: userChallenge.certificationChallengeDtos.flatMap((certification) =>
			certification.certificationChallengeImageDtos.map((img) => ({
				id: img.id,
				img: img.imageUrl,
			})),
		),
		startDate: userChallenge.startDate,
		endDate: userChallenge.endDate,
		today: userChallenge.isTodayCertification,
		countDay: userChallenge.effectiveDate,
		// memeberChallengeId: userChallenge.certificationChallengeDtos.map(
		// 	(memeberId) => memeberId.id,
		// ),
		memeberChallengeId: userChallenge.certificationChallengeDtos[0]?.id, // 첫 번째 id 값만 사용
	}));
};

export const transformAllChallenges = (
	allChallengeData: AllChallenges[],
): Challenge[] => {
	return allChallengeData.map((allChallenge) => ({
		id: allChallenge.id.toString(),
		title: allChallenge.challengeTitle,
		imgs: allChallenge.badgeDto.badgeImage,
		description: allChallenge.authContent,
		messages: allChallenge.authContent,
	}));
};

export const transformAllChallengeList = (
	allChallengeData: AllChallengeList,
): Challenge[] => {
	return allChallengeData.content.map((allChallenge) => ({
		id: allChallenge.id.toString(),
		title: allChallenge.challengeTitle,
		imgs: allChallenge.badgeDto.badgeImage,
		description: allChallenge.authContent,
		messages: allChallenge.authContent,
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
			percentage: parseInt(challengeInfos.progressRate.replace("%", ""), 10),

			// leftDay:
			progressDay: challengeInfos.effectiveDate,
			dayCount: challengeInfos.challengeDto.challengeCount,
			badgeName: challengeInfos.challengeDto.badgeDto.name,
			badgeDescription: challengeInfos.challengeDto.badgeDto.badgeDesc,
		},
		joinedCounts: challengeInfos.numberOfParticipatingPeople,
	};
};

export const transformChallengeInfo = (
	challengeInfo: ChallengeInfo | undefined,
): ChallengeInfoBoxProps | null => {
	if (!challengeInfo) {
		// showToast({ type: "error", message: "존재하지 않는 챌린지 입니다." });
		return null;
		info: {
			image: challengeInfo.badgeDto.badgeImage,
			info: [
				challengeInfo.challengeTerm,
				challengeInfo.authContent,
				challengeInfo.challengeDifficulty,
			],
			detail: challengeInfo.challengeDesc,
			// leftDay: ,
			dayCount: challengeInfo.challengeCount,
			badgeName: challengeInfo.badgeDto.name,
			badgeDescription: challengeInfo.badgeDto.badgeDesc,
		},
	};
};

export const transformFeedData = (
	feedData: ChallengeCertification[],
): FeedData[] => {
	return feedData.map((feed) => ({
		id: feed.id,
		nickname: feed.nickname,
		profileImg: feed.profileImage,
		isOwner: false,
		isChallenge: false,
		date: new Date(feed.certificationDate).toLocaleDateString(),
		badge: "",
		writeHour: new Date(feed.certificationDate).getHours(),
		img: feed.certificationChallengeImageDtos[0]?.imageUrl || "",
		progressDate: 0,
		title: "",
		body: feed.content,
	}));
};
