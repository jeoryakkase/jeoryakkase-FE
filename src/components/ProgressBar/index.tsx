"use client";

import {
	Chart as ChartJS,
	BarElement,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const options = {
	indexAxis: "y" as const,
	responsive: true,
	maintainAspectRatio: false,
	scales: {
		x: {
			max: 100,
			display: false, // x축 숨기기
		},
		y: {
			stacked: true,
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
			borderRadius: 30, // 막대 모서리
			borderSkipped: false,
		},
	},
};

const ProgressBarChart = ({ data }) => {
	return <Bar data={data} options={options} />;
};

export default ProgressBarChart;
