import Image from "next/image";

import character from "@assets/images/character/character01.png";
import Card from "@components/Card";

const CharacterCard = () => (
	<Card highlight className="flex-grow flex justify-center items-center">
		<Image src={character} alt="캐릭터" width={50} height={50} />
		<span className="ml-2">꾸준히 절약하는 소금이들 더 보러가기</span>
	</Card>
);

export default CharacterCard;
