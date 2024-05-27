import BannerCarousels from "@components/BannerCarousel";
import UserIcon from "@components/icons/UserIcon";
import { Badge } from "@components/shadcn/ui/Badge";

import BlankGoal from "./UI/Blank/BlankGoal";
import BlankHistory from "./UI/Blank/BlankHistory";
import Challenge from "./UI/Challenge";
import Goal from "./UI/Goal";
import History from "./UI/History";
import HotPost from "./UI/HotPost";

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

const Main = () => {
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

export default Main;
