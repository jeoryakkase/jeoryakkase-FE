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
	badgeImage: string;
	badgeDesc: string;
	badgeType: string;
	stroke: string;
	fill: string;
}

// 챌린지 타입
export interface ChallengeCertification {
	id: number;
	certificationDate: string;
	certificationChallengeImageDtos: {
		id: string;
		imageUrl: string;
	}[];
	content: string;
	saveMoney: string;
	nickname: string;
	profileImage: string;
	representativeBadgeId: number;
	challengeId: number;
}

export interface ChallengesJoined {
	id: number;
	parentsChallengeId: number;
	challengeTitle: string;
	challengeTerm: string;
	isTodayCertification: boolean;
	startDate: string;
	endDate: string;
	successDate: string;
	effectiveDate: number;
	totalSaveMoney: number;
	certificationChallengeDtos: ChallengeCertification[];
}

export interface AllChallenges {
	id: number;
	challengeTitle: string;
	challengeDesc: string;
	challengeType: string;
	challengeTerm: string;
	challengeCount: number;
	challengeGoal: number;
	challengeDifficulty: string;
	authContent: string;
	badgeDto: Badge;
}

export interface AllChallengeList {
	content: AllChallenges[];
}

export interface MemberChallengesJoined {
	id: number;
	challengeTtile: string;
	parentsChallengeId: number;
	challengeTerm: string;
	isTodayCertification: boolean;
	startDate: string;
	endDate: string;
	successDate: string;
	progressRate: string;
	numberOfParticipatingPeople: number;
	effectiveDate: number;
	totalSaveMoney: number;
	certificationChallengeDto: ChallengeCertification[];
}
