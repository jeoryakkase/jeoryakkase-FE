// import ModalSadContent from "@components/ModalSadContent";
import { useParams, useSearchParams } from "next/navigation";

import {
	transformChallengeInfo,
	transformChallengeInfoWithData,
	// transformFeedData,
} from "src/viewModels/challenge/challengesViewModel";

import { ContentSection } from "@components/ContentSection";
import challengeQueryOption from "@services/challenge";
import { useQuery } from "@tanstack/react-query";

// import ChallengeFeed from "./UI/ChallengeFeed";
import HeaderButton from "./UI/HeaderButton";
import InfoBox from "./UI/InfoBox";

const ChallengeDetail = () => {
	// getServerSideProps &
	// Prefetch Infinite Query 훅으로 가져오기

	const params = useSearchParams();
	const memberId = params ? params.get("memeberChallengeId") : null;
	const { challengeId } = useParams() as { challengeId: string };

	const numberChallengeId = Number(challengeId);
	const numberMemberId = Number(memberId);

	const { data: challengeDetailData } = useQuery(
		challengeQueryOption.getChallengeDetail({
			challengeId: numberMemberId,
		}),
	);

	const { data: challengeInfoData } = useQuery(
		challengeQueryOption.getChallengeInfo({
			challengeId: numberChallengeId,
		}),
	);

	// const { data: challengeFeedData } = useQuery(
	// 	challengeQueryOption.getChallengeFeed({
	// 		challengeId: numberChallengeId,
	// 	}),
	// );

	const challengeDetail = challengeDetailData
		? transformChallengeInfoWithData(challengeDetailData)
		: transformChallengeInfo(challengeInfoData);

	// const feedData = challengeFeedData
	// 	? transformFeedData(challengeFeedData)
	// 	: [];

	if (!challengeDetail) {
		return null;
	}

	const isJoined = !!challengeDetailData;
	return (
		<>
			{challengeDetail.info && (
				<InfoBox
					challengeId={challengeDetail.challengeId}
					challengeDetail={challengeDetail.info}
					isJoined={isJoined}
				/>
			)}
			{challengeDetailData && (
				<ContentSection
					title="챌린지 참여 피드"
					className="flex flex-col text-center"
					childrenClassName="flex flex-col flex-grow mt-8"
				>
					<HeaderButton />
					{/* <ChallengeFeed
						feedDatas={feedData}
						joinedCounts={challengeDetail.joinedCounts}
					/> */}
				</ContentSection>
			)}
		</>
	);
};

export default ChallengeDetail;
