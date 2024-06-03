import { colors } from "@lib/tailwindColors";

const doughtnutData = {
	labels: ["대중교통 이용", "도시락 싸가기", "카페 출입 금지"],
	datasets: [
		{
			label: "절약 항목",
			data: [15, 35, 30],
			backgroundColor: [
				colors["main-lightblue"],
				colors["main-midblue"],
				colors["main-darkblue"],
			],
			hoverBackgroundColor: [colors["main-yellow"]],
		},
	],
};

export default doughtnutData;
