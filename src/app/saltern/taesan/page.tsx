import { dummyTaeSanData } from "@containers/saltern/dummy";
import TaeSan from "@containers/saltern/UI/TaeSan";

const TaeSanPage = () => {
	return (
		<div>
			<TaeSan initialTaeSanData={dummyTaeSanData} />
		</div>
	);
};

export default TaeSanPage;
