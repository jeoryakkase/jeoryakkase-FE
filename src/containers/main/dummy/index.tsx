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
		src: "/images/logo.png",
		message: "로그인하고 저략카세로 절약을 시작해보세요!",
	},
};
