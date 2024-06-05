import Feed from "@components/Feed";
import Flex from "@components/Flex";
import { getFullDate } from "@utils/dates.utils";

const ChallengeFeed = ({ feedDatas, joinedCounts }) => {
	const todayDate = new Date();
	const formattedDate = getFullDate(todayDate);
	return (
		<section className="border-2 rounded-3xl p-10">
			<Flex align="center" justify="between">
				<div className="flex">
					<div className="mr-10 font-bold">오늘의 인증</div>
					<div className="text-sub-gray4">{formattedDate}</div>
				</div>
				<div>+{joinedCounts} 소금이 인증 완료</div>
			</Flex>
			<div className="w-full h-0.5 bg-sub-gray1 mt-4 mb-5" />
			{feedDatas.map((challengeFeedData) => (
				<div key={challengeFeedData.id}>
					<Feed feedData={challengeFeedData} />
					<div className="w-full h-0.5 bg-sub-gray1 mt-4 mb-10" />
				</div>
			))}
		</section>
	);
};

export default ChallengeFeed;
