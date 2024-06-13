import BannerCarousels from "@components/BannerCarousel";
import {
	dummyHotPostData as hotPostData,
	dummyStatistics,
} from "@containers/main/dummy";
import useAuthStore from "@stores/Auth/useUserAuth";
import useUserGoalStore from "@stores/Goal/goalStore";
import useUserChallenge from "@stores/UserChallenge/useUserChallenge";

import Challenge from "./ChallengeSection/Challenge";
// import BlankGoal from "./GoalSection/BlankGoal";
import Goal from "./GoalSection/Goal";
import HotPost from "./HotPostSection/HotPost";
import BlankStatistics from "./StatisticsSection/BlankStatistics";
import Statistics from "./StatisticsSection/Statistics";
import {
	backgroundColors,
	titleColors,
	subTitleColors,
} from "../assets/colors.assets";
import mainBannerData from "../assets/mainBannerData";

const banners = mainBannerData.map((banner, index) => ({
	...banner,
	backgroundColor: backgroundColors[index % backgroundColors.length],
	subTitleText: subTitleColors[index % subTitleColors.length],
	titleColors: titleColors[index % titleColors.length],
}));

const Main = () => {
	// 로그인 상태 받아서 ui 다르게 보여주기
	// 로그인 안했을 땐 주로 Link href="/login" 감싸기
	const goals = useUserGoalStore((state) => state.goals);
	const challenges = useUserChallenge((state) => state.challenges);
	const { isLogined } = useAuthStore();

	return (
		<div>
			<BannerCarousels banners={banners} />
			{isLogined && (
				<div>
					<Statistics userStatistics={dummyStatistics} />
					<Goal goals={goals} />
					<Challenge challenges={challenges} />
				</div>
			)}

			{/* provider로 감싸야할거 같음 */}
			{!isLogined && (
				<div>
					<BlankStatistics />
					{/* <BlankGoal /> */}
				</div>
			)}

			<HotPost hotPostData={hotPostData} />
		</div>
	);
};

export default Main;
