import { voteFeedDatas } from "@containers/saltern/dummy";
import FloatingButton from "@containers/saltern/UI/FloatingButton";
import Vote from "@containers/saltern/UI/Vote";

const VotePage = () => {
	return (
		<section>
			<Vote voteFeedDatas={voteFeedDatas} />
			<FloatingButton />
		</section>
	);
};

export default VotePage;
