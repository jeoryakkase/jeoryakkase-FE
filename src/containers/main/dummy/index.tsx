import character1 from "@assets/images/character/character01.png";

import doughtnutData from "../assets/doughtnutData";

export const dummyGoals = [
	{
		id: "1",
		img: "/images/goal1.png",
		title: "목표 1",
		percentage: 40,
		leftMoney: 50000,
		dayCount: 30,
		leftDay: 15,
	},
	{
		id: "2",
		img: "/images/goal2.png",
		title: "목표 2",
		percentage: 60,
		leftMoney: 30000,
		dayCount: 25,
		leftDay: 10,
	},
	{
		id: "3",
		img: "/images/goal3.png",
		title: "목표 3",
		percentage: 80,
		leftMoney: 20000,
		dayCount: 20,
		leftDay: 5,
	},
	{
		id: "4",
		img: "/images/goal4.png",
		title: "목표 4",
		percentage: 20,
		leftMoney: 100000,
		dayCount: 40,
		leftDay: 30,
	},
	{
		id: "5",
		img: "/images/goal5.png",
		title: "목표 5",
		percentage: 50,
		leftMoney: 40000,
		dayCount: 35,
		leftDay: 20,
	},
	{
		id: "6",
		img: "/images/goal6.png",
		title: "목표 6",
		percentage: 90,
		leftMoney: 10000,
		dayCount: 15,
		leftDay: 3,
	},
	{
		id: "7",
		img: "/images/goal7.png",
		title: "목표 7",
		percentage: 70,
		leftMoney: 25000,
		dayCount: 28,
		leftDay: 12,
	},
];

export const dummyStatistics = {
	todayDate: {
		date: "2024-06-14",
		savings: 30000,
		badges: ["배달비", "커피값"],
	},
	lastMonth: {
		date: "2024-05",
		totalSavings: 224300,
		badges: ["대중교통 이용", "도시락 싸가기", "카페 출입 금지"],
		doughnutData: doughtnutData, // 기존의 doughnutData 가져오기
	},
	logo: {
		src: character1,
		message: "124344555",
	},
};

export const dummyZarangData = [
	{
		id: 1,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다",
		zarangContent: ["카페 금지 챌린지 성공", 3740000] as [string, number],
		cheers: 540,
	},
	{
		id: 2,
		nickName: "리틀최강민수",
		profileImage: "https://picsum.photos/60/60",
		comment: "친구는 잃었지만 통장은 지켰다11",
		zarangContent: ["매달 10만원 저축 성공", 312000] as [string, number],
		cheers: 100,
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
	},
];

export const dummyHotPostData = {
	voteTitle: "중고차 허부러",
	voteContent:
		"이거 살까말까 허불허 눌러줘이거 살까말까 허불허 눌러줘이거 살까말까 허불허 눌러줘이거 살까말까 허불허 눌러줘이거 살까말까 허불허 눌러줘",
	tipTitle: "페트병으로 쏠쏠하게 모으기",
	tipContent:
		"절약하는 꿀팁을 알려드려요!절약하는 꿀팁을 알려드려요!절약하는 꿀팁을 알려드려요!절약하는 꿀팁을 알려드려요!절약하는 꿀팁을 알려드려요!",
	tipImg: "https://picsum.photos/200/150",
};
