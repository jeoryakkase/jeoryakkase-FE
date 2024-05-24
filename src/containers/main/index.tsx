import React from "react";
import BannerCarousels from "@components/BannerCarousel";
import { Badge } from "@components/shadcn/ui/Badge";
import UserIcon from "public/svgs/UserIcon";
import History from "./UI/History";
import Goal from "./UI/Goal";
import Challenge from "./UI/Challenge";
import HotPost from "./UI/HotPost";
import BlankHistory from "./UI/Blank/BlankHistory";
import BlankGoal from "./UI/Blank/BlankGoal";

const bannerData = [
	{
		title: "첫 번째 배너",
		subtitle: "첫 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
	{
		title: "두 번째 배너",
		subtitle: "두 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
	{
		title: "세 번째 배너",
		subtitle: "세 번째 배너의 설명입니다.",
		icon: <UserIcon />,
	},
];

const backgroundColors = [
	"bg-main-lightblue",
	"bg-main-darkblue",
	"bg-main-midblue",
];

const banners = bannerData.map((banner, index) => ({
	...banner,
	backgroundColor: backgroundColors[index % backgroundColors.length],
}));

const mainPage = () => {
	return (
		<div>
			<BannerCarousels banners={banners} />

			<History />
			<BlankHistory />

			<Goal />
			<BlankGoal />

			<Challenge />

			<HotPost />

			<Badge variant="default">뱃지</Badge>
			<Badge variant="shadow" bgColor="lightblue">
				뱃지
			</Badge>
			<Badge variant="default" size="l" bgColor="midblue">
				뱃지
			</Badge>
			<Badge variant="formTag">뱃지</Badge>
			<Badge variant="shadow" size="s" bgColor="yellow">
				뱃지
			</Badge>
		</div>
	);
};

export default mainPage;
