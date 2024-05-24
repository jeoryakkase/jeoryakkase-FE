"use client";

import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const options = {
	indexAxis: "y" as const,
	responsive: true,
	scales: {
		x: {
			max: 100,
			display: false, // x축 숨기기
		},
		y: {
			display: false, // y축 숨기기
		},
	},
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: true,
		},
	},
	elements: {
		bar: {
			borderWidth: 0.5, // 막대의 외곽선 두께
			barThickness: 5, // 막대의 두께 조절
			barPercentage: 0.2, // 막대의 두께 비율 조절
			categoryPercentage: 0.5, // 카테고리 두께 비율 조절
		},
	},
};

const ProgressBarChart = ({ data }) => {
	return <Bar data={data} options={options} />;
};

export default ProgressBarChart;
