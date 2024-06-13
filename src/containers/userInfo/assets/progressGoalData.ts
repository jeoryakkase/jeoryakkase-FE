const progressGoalData = (currentAmount: number, goalAmount: number) => ({
	labels: ["목표금액"],
	datasets: [
		{
			label: "진행도",
			data: [currentAmount],
			backgroundColor: ["#0A174E"],
			borderWidth: 0.5,
			barThickness: 20,
		},
		{
			label: "총 진행도",
			data: [goalAmount],
			backgroundColor: ["#FDDB3A"],
			barThickness: 20,
		},
	],
});
const goalData = [
	{
		id: 1,
		goalAmount: 800,
		image: "/images/lunch.png",
		startDate: "2024-05-29", // 목표 시작 날짜
		endDate: "2024-07-01", // 목표 종료 날짜
		remainingAmount: 500,
		certifications: [],
		status: "진행중인 목표",
	},
	{
		id: 2,
		goalAmount: 1000,
		image: "/images/lunch.png",
		startDate: "2024-05-29",
		endDate: "2024-08-15",
		remainingAmount: 500,
		certifications: [],
		status: "완료된 목표",
	},
	{
		id: 3,
		goalAmount: 600,
		image: "/images/transport.png",
		startDate: "2024-04-01",
		endDate: "2024-06-01",
		remainingAmount: 200,
		certifications: [],
		status: "포기한 목표",
	},
];

const certificationData = [
	{
		certificationAmount: 50, // 인증 금액
		image: "images/coffee.png", // 인증을 나타내는 이미지 파일명
		category: "카페", // 인증 카테고리
		date: "2024-06-10", // 인증 날짜
		goalId: 1, // 인증한 목표의 ID
	},
];

export { progressGoalData, goalData, certificationData };
