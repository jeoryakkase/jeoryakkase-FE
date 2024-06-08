// import ModalSadContent from "@components/ModalSadContent";
import { ContentSection } from "@components/ContentSection";
import { challengeDetail } from "@containers/challenge/dummy";

import ChallengeFeed from "./UI/ChallengeFeed";
import HeaderButton from "./UI/HeaderButton";
import InfoBox from "./UI/InfoBox";

const ChallengeDetail = () => {
	// getServerSideProps &
	// Prefetch Infinite Query 훅으로 가져오기
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
		</>
	);
};

export default ChallengeDetail;
