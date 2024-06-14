// import ModalSadContent from "@components/ModalSadContent";
import { useParams, useSearchParams } from "next/navigation";

import {
	transformChallengeInfo,
	transformChallengeInfoWithData,
} from "src/viewModels/challenge/challengesViewModel";

import { ContentSection } from "@components/ContentSection";
import showToast from "@lib/toastConfig";
import challengeQueryOption from "@services/challenge";
import { useQuery } from "@tanstack/react-query";

import ChallengeFeed from "./UI/ChallengeFeed";
import HeaderButton from "./UI/HeaderButton";
import InfoBox from "./UI/InfoBox";

const ChallengeDetail = () => {
	// getServerSideProps &
	// Prefetch Infinite Query 훅으로 가져오기

	// const handleOpenGiveupModal = () => {
	// 	<Link to>
	// 	router.replace(`/challenge/${challengeId}`);
	// };
	// const handleOpenGiveupModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const handleCloseModal = () => {
	// 	setIsModalOpen(false);
	// };
	const params = useSearchParams();
	const memberId = params.get("memeberChallengeId");
	const { challengeId } = useParams();

	const numberChallengeId = Number(challengeId);
	const numberMemberId = Number(memberId);
	console.log(numberMemberId);
	console.log(typeof numberMemberId);
	console.log(numberChallengeId);
	const { data: challengeDetailData } = useQuery(
		challengeQueryOption.getChallengeDetail({
			challengeId: numberMemberId,
		}),
	);

	console.log(challengeDetailData);

	const { data: challengeInfoData } = useQuery(
		challengeQueryOption.getChallengeInfo({
			challengeId: numberChallengeId,
		}),
	);

	const challengeDetail = challengeDetailData
		? transformChallengeInfoWithData(challengeDetailData)
		: transformChallengeInfo(challengeInfoData);

	console.log(challengeInfoData);

	if (!challengeDetail) {
		showToast({ type: "error", message: "챌린지 정보가 없습니다." });
		// router.replace("/challenge");
		return null;
	}

	const isJoined = !!challengeDetailData;
	console.log(isJoined);
	return (
		<>
			{challengeDetail.info && (
				<InfoBox
					challengeId={challengeDetail.challengeId}
					challengeDetail={challengeDetail.info}
					isJoined={!!challengeDetailData}
				/>
			)}
			{challengeDetailData && (
				<ContentSection
					title="챌린지 참여 피드"
					className="flex flex-col text-center"
					childrenClassName="flex flex-col flex-grow mt-8"
				>
					<HeaderButton />
					<ChallengeFeed
						feedDatas={challengeDetail.feedData}
						joinedCounts={challengeDetail.joinedCounts}
					/>
				</ContentSection>
			)}
		</>
	);
};

export default ChallengeDetail;
