import {
	transformGoals,
	transformStatistics,
} from "src/viewModels/main/mainViewModel";

import BannerCarousels from "@components/BannerCarousel";
import { dummyHotPostData as hotPostData } from "@containers/main/dummy";
import mainQueryOption from "@services/main";
import useAuthStore from "@stores/Auth/useUserAuth";
import { useQuery } from "@tanstack/react-query";

// import BlankGoal from "./GoalSection/BlankGoal";
import BlankGoal from "./GoalSection/BlankGoal";
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
	const { isLogined } = useAuthStore();
	const { data: goalData } = useQuery(mainQueryOption.getUserGoal());
	const { data: statisticData } = useQuery(mainQueryOption.getUserStatistics());
	// const { data: memberChallengeData } = useQuery(
	// 	challengeQueryOption.getMemberChallenge(),
	// );

	const goals = goalData ? transformGoals(goalData) : [];
	const statistics = transformStatistics(statisticData);

	return (
		<div>
			<BannerCarousels banners={banners} />
			{isLogined && (
				<div>
					<Statistics userStatistics={statistics} />
					<Goal goals={goals} />
					{/* <Challenge challenges={memberChallengeData} /> */}
				</div>
			)}

			{!isLogined && (
				<div>
					<BlankStatistics />
					<BlankGoal />
				</div>
			)}

			<HotPost hotPostData={hotPostData} />
		</div>
	);
};

export default Main;
