const progressBarData = (percentage: number) => ({
	labels: ["Progress"],
	datasets: [
		{
			label: "진행도",
			data: [percentage],
			backgroundColor: ["#FFA726"],
			borderColor: ["#FB8C00"],
			borderWidth: 0.5,
			barThickness: 10,
		},
	],
});

export default progressBarData;
