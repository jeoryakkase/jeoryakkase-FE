// 페이지 네이션 타입
export interface RequestPagenation {
	page: number;
	size: number;
}

export interface ResponsePagenation<T> {
	data: T[];
	number: 0;
	size: 0;
	totalPages: 0;
	totalElements: 0;
	numberOfElements: 0;
}

// 뱃지 타입
export interface Badge {
	name: string;
	badgeImage: {
		id: string;
		imageUrl: string;
	}[];
	badgeDesc: string;
	badgeType: string;
}

// 챌린지 타입
interface ChallengeCertification {
	certificationDate: string;
	certificationChallengeImageDtos: {
		id: string;
		imageUrl: string;
	}[];
	content: string;
	saveMoney: string;
}

export interface ChallengesJoined {
	challengeId: string;
	challengeTtile: string;
	challengeTerm: string;
	isTodayCertification: boolean;
	startDate: string;
	endDate: string;
	effectiveDate: number;
	certificationChallengeDto: ChallengeCertification;
}

export interface AllChallenges {
	challengeId: string;
	challengeTitle: string;
	challengeType: string;
	challengeTerm: string;
	challengeCount: number;
	challengeGoal: number;
	authContent: string;
	badgeDto: Badge;
}
