import { ContentsProps } from "@components/Feed/UI/Contents";
import { ProfileBoxProps } from "@components/Feed/UI/ProfileBox";

type TagImgType = { id: string; img: string }[] | string;

export interface Challenge {
	id: string;
	title: string;
	imgs: TagImgType;
	description: string;
	messages: string;
}

export interface Feed {
	profileData: ProfileBoxProps;
	content: ContentsProps;
}

export interface UserChallenges {
	id: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	imgs?: TagImgType;
	today: boolean;
	dueDate?: boolean;
	countDay?: number;
	memeberChallengeId: number;
	// feedData: Feed;
}

export interface ChallengeInfoBoxProps {
	challengeId: string;
	info: {
		title: string;
		image: string;
		info: string[];
		detail: string;
		isJoined?: boolean;
		percentage?: number;
		// leftDay: number;
		progressDay?: number;
		dayCount: number;
		badgeName: string;
		badgeDescription: string;
	};
}

export interface FeedData {
	id: number;
	nickname: string;
	profileImg: string;
	isOwner: boolean;
	isChallenge: boolean;
	date: string;
	badge: string;
	writeHour: number;
	img: string;
	progressDate: number;
	title: string;
	body: string;
}
export interface ChallengeDetail extends ChallengeInfoBoxProps {
	joinedCounts: number;
	feedData?: FeedData[];
}
