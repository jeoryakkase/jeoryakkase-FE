export interface Chunk {
	chunkId: number;
	challenges: Challenge[];
}

export const allChallenge: Chunk[] = [
	{
		chunkId: 1,
		challenges: [
			{
				id: 1,
				title: "점심 도시락 싸기",
				imgs: [{ id: "1", img: "https://picsum.photos/60/60" }],
				description: "도시락 싸기",
				messages: ["도시락 싸기 도전!", "성공 시 5점 획득"],
			},
			{
				id: 2,
				title: "대중교통 타기",
				imgs: [{ id: "2", img: "https://picsum.photos/60/60" }],
				description: "지구 온난화 방지",
				messages: ["대중교통 타기 도전!", "성공 시 2점 획득"],
			},
			{
				id: 3,
				title: "카페 음료 일회용 컵 안쓰기",
				imgs: [{ id: "3", img: "https://picsum.photos/60/60" }],
				description: "카페 음료 컵 사용 줄이기",
				messages: ["카페 음료 컵 사용 줄이기 도전!", "성공 시 3점 획득"],
			},
			{
				id: 4,
				title: "만보 걷기",
				imgs: [{ id: "4", img: "https://picsum.photos/60/60" }],
				description: "매일 만보 걷기",
				messages: ["매일 만보 걷기 도전!", "성공 시 3점 획득"],
			},
			{
				id: 5,
				title: "만보 걷기",
				imgs: [{ id: "5", img: "https://picsum.photos/60/60" }],
				description: "매일 만보 걷기",
				messages: ["매일 만보 걷기 도전!", "성공 시 3점 획득"],
			},
		],
	},
	{
		chunkId: 2,
		challenges: [
			{
				id: 6,
				title: "양손을 가득 채운 장보기",
				imgs: [{ id: "6", img: "https://picsum.photos/60/60" }],
				description: "일회용 봉지 대신 장바구니 사용",
				messages: ["장바구니 사용하기 도전!", "성공 시 5점 획득"],
			},
			{
				id: 7,
				title: "일주일 동안 커피 안 마시기",
				imgs: [{ id: "7", img: "https://picsum.photos/60/60" }],
				description: "일주일 동안 커피 안 마시기 도전",
				messages: ["커피 안 마시기 도전!", "성공 시 3점 획득"],
			},
			{
				id: 8,
				title: "하루 만보 걷기",
				imgs: [{ id: "8", img: "https://picsum.photos/60/60" }],
				description: "하루에 만보 걷기 도전",
				messages: ["만보 걷기 도전!", "성공 시 3점 획득"],
			},
			{
				id: 9,
				title: "한 달 동안 금주하기",
				imgs: [{ id: "9", img: "https://picsum.photos/60/60" }],
				description: "한 달 동안 금주하기 도전",
				messages: ["금주하기 도전!", "성공 시 5점 획득"],
			},
			{
				id: 10,
				title: "한 달 동안 금주하기",
				imgs: [{ id: "10", img: "https://picsum.photos/60/60" }],
				description: "한 달 동안 금주하기 도전",
				messages: ["금주하기 도전!", "성공 시 5점 획득"],
			},
		],
	},
];

export const hotChallenge = [
	{
		id: 1,
		title: "점심 도시락 싸기",
		imgs: [{ id: "1", img: "https://picsum.photos/60/60" }],
		description: "도시락 싸기",
		messages: ["도시락 싸기 도전!", "뱃지 획득"],
	},
	{
		id: 2,
		title: "대중교통 타기",
		imgs: [{ id: "2", img: "https://picsum.photos/60/60" }],
		description: "지구 온난화 방지",
		messages: ["대중교통 타기 도전!", "뱃지 획득"],
	},
	{
		id: 3,
		title: "카페 출입 금지",
		imgs: [{ id: "3", img: "https://picsum.photos/60/60" }],
		description: "카페는 홈카페뿐",
		messages: ["카페 문지방 넘지 않기!", "뱃지 획득"],
	},
	{
		id: 4,
		title: "만보 걷기",
		imgs: [{ id: "4", img: "https://picsum.photos/60/60" }],
		description: "매일 만보 걷기",
		messages: ["매일 만보 걷기 도전!", "뱃지 획득"],
	},
	{
		id: 5,
		title: "만보 걷기",
		imgs: [{ id: "5", img: "https://picsum.photos/60/60" }],
		description: "매일 만보 걷기",
		messages: ["매일 만보 걷기 도전!", "뱃지 획득"],
	},
];

export const challengeDetail = {
	challengeId: "12",
	info: {
		title: "대중교통 타기",
		image: "https://picsum.photos/60/60",
		info: ["한 달", "기름비 아끼기", "좋은 습관 만들기"],
		detail:
			"30일 동안 대중교통을 이용 내역을 인증하는 챌린지입니다. 절약을 위한 좋은 습관을 만드세요.",
		isJoined: true,
		percentage: 75,
		leftDay: 10,
		progressDay: 20,
		dayCount: 30,
	},
	joinedCounts: 14,
	feedData: [
		{
			id: 1,
			nickname: "엘리스 매니저",
			profileImg: "https://picsum.photos/60/60",
			isOwner: true,
			isChallenge: true,
			date: "2024-06-01",
			badge: "카페출입금지",
			writeHour: 2,
			img: "https://picsum.photos/100/100",
			progressDate: 20,
			title: "오늘의 인증 성공",
			body: "오늘도 택시 타고 싶었지만 참고 지하철을 탔습니다",
			commentData: {
				commentCounts: 2,
				postId: "1",
				comments: [
					{
						id: 1,
						nickname: "응원봇",
						profileImg: "https://picsum.photos/60/60",
						comment: "대단하세요!",
						level: 1, // 원글 표시
						depth: 0,
						isOwner: false,
					},
					{
						id: 2,
						nickname: "엘리스 매니저",
						profileImg: "https://picsum.photos/60/60",
						comment: "응원 감사합니다!",
						level: 1, // 원글 표시
						depth: 1, // 댓글 깊이
						isOwner: true,
					},
					{
						id: 3,
						nickname: "대댓글이지롱",
						profileImg: "https://picsum.photos/60/60",
						comment: "ㄱㄴㅇㄷㄹ!",
						level: 2, // 원글 표시
						depth: 2, // 댓글 깊이
						isOwner: true,
					},
					{
						id: 4,
						nickname: "엘리스 매니저",
						profileImg: "https://picsum.photos/60/60",
						comment: "응원 감사감사리",
						level: 1, // 원글 표시
						depth: 1, // 댓글 깊이
						isOwner: true,
					},
					{
						id: 5,
						nickname: "머랭쿠킼",
						profileImg: "https://picsum.photos/60/60",
						comment: "응원 감사감사리",
						level: 4, // 원글 표시
						depth: 2, // 댓글 깊이
						isOwner: false,
					},
				],
			},
		},
		{
			id: 2,
			nickname: "매니저2",
			profileImg: "https://picsum.photos/60/60",
			isOwner: false,
			isChallenge: true,
			date: "2024-06-01",
			badge: "야근강제절약",
			writeHour: 1,
			progressDate: 15,
			title: "ㅎㅎ... 강제절약 인증",
			body: "통장이 비어있어서 강제로 절약했습니다..",
			commentData: {
				commentCounts: 1,
				postId: "2",
				comments: [
					{
						id: 5,
						nickname: "하루한번굴비",
						profileImg: "https://picsum.photos/60/60",
						comment: "공감합니다",
						depth: 0,
						level: 1,
						isOwner: false,
					},
				],
			},
		},
	],
};

export const comments = [
	{
		id: 1,
		nickname: "간지창현1",
		profileImg: "https://picsum.photos/60/60",
		comment: "첫번째 댓글입니다.",
		depth: 0,
		level: 0,
		isOwner: true,
	},
	{
		id: 2,
		nickname: "지존민혁2",
		profileImg: "https://picsum.photos/60/60",
		comment: "두번째 댓글입니다.",
		depth: 0,
		level: 1,
		isOwner: false,
	},
	{
		id: 3,
		nickname: "지존민혁2",
		profileImg: "https://picsum.photos/60/60",
		comment: "두번째 댓글입니다.",
		depth: 1,
		level: 1,
		isOwner: false,
	},
];
