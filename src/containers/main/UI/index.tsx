import BannerCarousels from "@components/BannerCarousel";
import UserIcon from "@components/icons/UserIcon";
import {
	dummyHotPostData as hotPostData,
	dummyStatistics,
} from "@containers/main/dummy";
import useUserGoalStore from "@stores/Goal/goalStore";
import useUserChallenge from "@stores/UserChallenge/useUserChallenge";

import Challenge from "./ChallengeSection/Challenge";
// import BlankGoal from "./GoalSection/BlankGoal";
import Goal from "./GoalSection/Goal";
import HotPost from "./HotPostSection/HotPost";
import BlankStatistics from "./StatisticsSection/BlankStatistics";
import Statistics from "./StatisticsSection/Statistics";

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
	// 로그인 상태 받아서 ui 다르게 보여주기
	// 로그인 안했을 땐 주로 Link href="/login" 감싸기
	const goals = useUserGoalStore((state) => state.goals);
	const challenges = useUserChallenge((state) => state.challenges);

	return (
		<div>
			<BannerCarousels banners={banners} />

			<Statistics userStatistics={dummyStatistics} />
			<BlankStatistics />

			<Goal goals={goals} />
			{/* <BlankGoal /> */}

			<Challenge challenges={challenges} />

			{/* provider로 감싸야할거 같음 */}
			<HotPost hotPostData={hotPostData} />
		</div>
	);
};

export default Main;
