import localFont from "next/font/local";

const pretandard = localFont({
	src: [
		{
			path: "../../public/fonts/pretendard-thin.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/pretendard-regular.woff2",
			weight: "400",
			style: "normal",
		},

		{
			path: "../../public/fonts/pretendard-semibold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/pretendard-bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-pretandard",
});

export default pretandard;
