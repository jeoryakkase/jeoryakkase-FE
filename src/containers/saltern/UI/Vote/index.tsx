import Feed from "@components/Feed";

import VoteButton from "./VoteButton";

const Vote = ({ voteFeedDatas }) => {
	return (
		<section>
			{voteFeedDatas.map((voteData) => (
				<Feed key={voteData.id} feedData={voteData}>
					<VoteButton
						her={voteData.her}
						bullher={voteData.bullher}
						isVoted={voteData.isVoted}
					/>
				</Feed>
			))}
			<div className="w-full h-0.5 bg-sub-gray1 mt-4 mb-10" />
		</section>
	);
};

export default Vote;
