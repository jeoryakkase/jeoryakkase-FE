import { tipsFeedDatas } from "@containers/saltern/dummy";
import FloatingButton from "@containers/saltern/UI/FloatingButton";
import Tips from "@containers/saltern/UI/Tips";

const TipsPage = () => {
	return (
		<section>
			<Tips tipDatas={tipsFeedDatas} />
			<FloatingButton />
		</section>
	);
};

export default TipsPage;
