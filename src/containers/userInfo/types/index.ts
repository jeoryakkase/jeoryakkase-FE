export interface RepresentativeBadge {
	name: string;
	badgeImage: string;
	badgeDesc: string;
	badgeType: string;
	stroke: string;
	fill: string;
}

export interface CertificationChallengeImageDto {
	imageUrl: string;
}

export interface CertificationChallengeDto {
	id: number;
	certificationDate: string;
	content: string;
	saveMoney: number;
	nickname: string;
	profileImage: string;
	representativeBadgeId: number;
	challengeId: number;
	certificationChallengeImageDtos: {
		id: number;
		imageUrl: string;
	};
}

export interface ChallengeDto {
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
		stroke: string;
		fill: string;
	};
}
export interface MemberChallenge {
	id: number;
	startDate: string;
	endDate: string;
	successDate: string | null;
	challengeStatus: "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
	isTodayCertification: boolean;
	authCount: number;
	successCount: number;
	challengeComment: string;
	totalSaveMoney: number;
	progressRate: string;
	numberOfParticipatingPeople: number | null;
	certificationChallengeDtos: CertificationChallengeDto[];
	challengeDto: ChallengeDto;
}

export interface GoalContent {
	id: number;
	goalTitle: string;
	goalAmount: number;
	currentAmount: number;
	goalImage: string;
	goalStartDate: string;
	goalEndDate: string;
	goalStatus: string;
}

export interface Goals {
	totalPages: number;
	totalElements: number;
	pageable: any;
	size: number;
	content: GoalContent[];
	number: number;
	sort: any;
	first: boolean;
	last: boolean;
	numberOfElements: number;
	empty: boolean;
}

export interface Bookmark {
	id: number;
	memberId: number;
	title: string;
	contents: string;
	totalLike: number;
	view: number;
	category: string;
	imageUrls: string;
}

export interface UserInfoData {
	memberId: number;
	nickname: string;
	profileImage: string;
	about: string;
	representativeBadge: RepresentativeBadge;
	memberChallenges: MemberChallenge[];
	goals: Goals;
	bookmarks: Bookmark[];
}

export interface MemberChallengesBadges {
	name: string;
	badgeDesc: string;
	badgeImage: string;
	badgeType: string;
	stroke: string;
	fill: string;
}
