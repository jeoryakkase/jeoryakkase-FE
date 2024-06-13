interface RepresentativeBadge {
	name: string;
	badgeImage: string;
	badgeDesc: string;
	badgeType: string;
	stroke: string;
	fill: string;
}

interface CertificationChallengeImageDto {
	imageUrl: string;
}

interface CertificationChallengeDto {
	certificationDate: string;
	certificationChallengeImageDtos: CertificationChallengeImageDto[];
	content: string;
	saveMoney: string;
	nickname: string;
	profileImage: string;
	representativeBadgeId: number;
}

interface ChallengeDto {
	challengeTitle: string;
	challengeDesc: string;
	challengeGoal: number;
	challengeCount: number;
	challengeType: "COUNT" | "GOAL";
	challengeTerm: string;
	challengeDifficulty: string;
	authContent: string;
	badgeDto: RepresentativeBadge;
}

interface MemberChallenge {
	id: number;
	startDate: string;
	endDate: string;
	successDate: string;
	challengeStatus: string;
	isTodayCertification: boolean;
	authCount: number;
	successCount: number;
	challengeComment: string;
	totalSaveMoney: number;
	certificationChallengeDtos: CertificationChallengeDto[];
	challengeDto: ChallengeDto;
}

interface GoalContent {
	id: number;
	goalTitle: string;
	goalAmount: number;
	currentAmount: number;
	goalImage: string;
	goalStartDate: string;
	goalEndDate: string;
	goalStatus: string;
}

interface Goals {
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

interface Bookmark {
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
