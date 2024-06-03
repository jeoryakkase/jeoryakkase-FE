import { challengeDetail } from "@containers/challenge/dummy";

import ChallengeFeed from "./UI/ChallengeFeed";
import InfoBox from "./UI/InfoBox";

const ChallengeDetail = () => {
	// getServerSideProps &
	// Prefetch Infinite Query 훅으로 가져오기
	return (
		<>
			<InfoBox challengeDetail={challengeDetail.info} />
			<ChallengeFeed feedDatas={challengeDetail.feedData} />
		</>
	);
};

export default ChallengeDetail;
