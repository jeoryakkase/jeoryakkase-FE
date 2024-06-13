export const voteFeedDatas = [
	{
		id: 1,
		nickname: "엘리스 매니저",
		profileImg: "https://picsum.photos/60/60",
		isOwner: true,
		category: "vote",
		isVoted: false,
		date: "2024-06-01",
		badge: "카페출입금지",
		writeHour: 2,
		img: "https://picsum.photos/100/100",
		title: "오늘의 인증 성공",
		body: "오늘도 택시 타고 싶었지만 참고 지하철을 탔습니다",
		her: 90,
		bullher: 10,
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
					nickname: "엘리스 매니저",
					profileImg: "https://picsum.photos/60/60",
					comment: "응원 감사감사리",
					level: 1, // 원글 표시
					depth: 1, // 댓글 깊이
					isOwner: true,
				},
				{
					id: 4,
					nickname: "머랭쿠킼",
					profileImg: "https://picsum.photos/60/60",
					comment: "응원 감사감사리",
					level: 1, // 원글 표시
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
		category: "vote",
		isVoted: true,
		date: "2024-06-01",
		badge: "야근강제절약",
		writeHour: 1,
		progressDate: 15,
		title: "ㅎㅎ... 강제절약 인증",
		body: "통장이 비어있어서 강제로 절약했습니다..",
		her: 25,
		bullher: 75,
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
];

export const tipsFeedDatas = [
	{
		id: 1,
		nickname: "엘리스 매니저",
		profileImg: "https://picsum.photos/60/60",
		isOwner: true,
		category: "tips",
		date: "2024-06-01",
		badge: "카페출입금지",
		writeHour: 2,
		img: "https://picsum.photos/100/100",
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
					nickname: "엘리스 매니저",
					profileImg: "https://picsum.photos/60/60",
					comment: "응원 감사감사리",
					level: 1, // 원글 표시
					depth: 1, // 댓글 깊이
					isOwner: true,
				},
				{
					id: 4,
					nickname: "머랭쿠킼",
					profileImg: "https://picsum.photos/60/60",
					comment: "응원 감사감사리",
					level: 1, // 원글 표시
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
];

export const dummyTaeSanData = [
	{
		id: 1,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다",
		zarangContent: ["카페 금지 챌린지 성공", 3740000] as [string, number],
		cheers: 540,
		isOwnered: true,
		isCheered: false,
	},
	{
		id: 2,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다11",
		zarangContent: ["매달 10만원 저축 성공", 312000] as [string, number],
		cheers: 100,
		isOwnered: true,
		isCheered: true,
	},
	{
		id: 3,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: false,
		isCheered: false,
	},

	{
		id: 4,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: false,
		isCheered: false,
	},
	{
		id: 5,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: true,
		isCheered: false,
	},
	{
		id: 6,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: true,
		isCheered: false,
	},
];

export const dummyUserTaeSanData = [
	{
		id: 1,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: false,
		isCheered: false,
	},
	{
		id: 2,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: true,
		isCheered: false,
	},
	{
		id: 3,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다22",
		zarangContent: ["한 달 도시락 싸기 챌린지 성공", 2323000] as [
			string,
			number,
		],
		cheers: 300,
		isOwnered: true,
		isCheered: false,
	},
];
