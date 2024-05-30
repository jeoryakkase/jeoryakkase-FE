const progressGoalData = {
	labels: ["Progress"],
	datasets: [
		{
			label: "진행도",
			data: [45],
			backgroundColor: ["#0A174E"],
			borderWidth: 0.5,
			barThickness: 20,
		},
		{
			label: "총 진행도",
			data: [100],
			backgroundColor: ["#FDDB3A"], // 노란색
			barThickness: 20,
		},
	],
};

const goalData = [
	{
		id: 1,
		goalAmount: 800,
		image: "/images/lunch.png",
		startDate: "2024-05-29", // 목표 시작 날짜
		endDate: "2024-07-01", // 목표 종료 날짜
		remainingAmount: 500,
		certifications: [],
	},
	{
		id: 2,
		goalAmount: 1000,
		image: "/images/lunch.png",
		startDate: "2024-05-29",
		endDate: "2024-08-15",
		remainingAmount: 500,
		certifications: [],
	},
];

const certificationData = [
	{
		certificationAmount: 50, // 인증 금액
		image: "certification_image_1.jpg", // 인증을 나타내는 이미지 파일명
		category: "운동", // 인증 카테고리
		date: "2024-06-10", // 인증 날짜
		goalId: 1, // 인증한 목표의 ID
	},
	// 다른 인증 데이터들...
];

export { progressGoalData, goalData, certificationData };
