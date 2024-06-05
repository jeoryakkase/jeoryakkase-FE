// import { useState } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@components/Button";
// import ModalSadContent from "@components/ModalSadContent";
import { challengeDetail } from "@containers/challenge/dummy";

import ChallengeFeed from "./UI/ChallengeFeed";
import InfoBox from "./UI/InfoBox";

const ChallengeDetail = () => {
	// getServerSideProps &
	// Prefetch Infinite Query 훅으로 가져오기
	const { challengeId } = useParams();
	// const [isModalOpen, setIsModalOpen] = useState(false);

	// const router = useRouter();
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

	return (
		<>
			<InfoBox challengeDetail={challengeDetail.info} />
			<section>
				<Link href={`/challenge/${challengeId}/modal`}>
					<Button>포기</Button>
				</Link>
			</section>
			<ChallengeFeed
				feedDatas={challengeDetail.feedData}
				joinedCounts={challengeDetail.joinedCounts}
			/>
			{/* {isModalOpen && (
				<ModalSadContent
					modalContent="포기"
					subText="포기하시면 어쩌구저쩌구"
					modalButtonAction={handleCloseModal} // 모달 버튼 액션으로 모달 닫기
				/>
			)} */}
		</>
	);
};

export default ChallengeDetail;
