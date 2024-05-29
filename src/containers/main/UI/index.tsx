import BannerCarousels from "@components/BannerCarousel";
import UserIcon from "@components/icons/UserIcon";
import useUserGoalStore from "@stores/Goal/useGoalStore";

import Challenge from "./ChallengeSection/Challenge";
import BlankGoal from "./GoalSection/BlankGoal";
import Goal from "./GoalSection/Goal";
import HotPost from "./HotPost/HotPost";
import BlankStatistics from "./StatisticsSection/BlankStatistics";
import Statistics from "./StatisticsSection/Statistics";
import { dummyStatistics } from "../dummy";

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
	const goals = useUserGoalStore((state) => state.goals);
	return (
		<div>
			<BannerCarousels banners={banners} />

			<Statistics userStatistics={dummyStatistics} />
			<BlankStatistics />

			<Goal goals={goals} />
			<BlankGoal />

			<Challenge />

			<HotPost />
		</div>
	);
};

export default Main;
