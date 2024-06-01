import Feed from "@components/Feed";
import { CommentProvider } from "@stores/Comment/CommentContext";

const ChallengeFeed = ({ feedDatas }) => {
	return (
		<section>
			<div>
				<div>오늘의 인증</div>
				<div>getFullDate(date)</div>
				<div>+{feedDatas.joinedCounts} 소금이 인증 완료</div>
			</div>
			<div className="w-full h-0.5" />
			<CommentProvider>
				{feedDatas.map((feedData) => (
					<>
						<Feed feedData={feedData} key={feedData.id} />
						<div className="w-full h-0.5" />
					</>
				))}
			</CommentProvider>
		</section>
	);
};

export default ChallengeFeed;
