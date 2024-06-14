import { colors } from "@lib/tailwindColors";

const doughtnutData = ({ percentage, labels }) => ({
	labels,
	datasets: [
		{
			label: "절약 항목",
			data: percentage,
			backgroundColor: [
				colors["main-lightblue"],
				colors["main-midblue"],
				colors["main-darkblue"],
			],
			hoverBackgroundColor: [colors["main-yellow"]],
		},
	],
});

export default doughtnutData;
