import Image from "next/image";

import chain from "@assets/images/bannerImage/chain.png";
import lightBlub from "@assets/images/bannerImage/lightBulb.png";
import proudCharacter from "@assets/images/character/character06.png";

const mainBannerData = [
	{
		title: "은퇴까지 몇 년 더 일해야 할까?",
		subtitle: "노예 탈출을 위한 각을 재보세요!",
		icon: (
			<Image
				src={chain}
				width={200}
				height={200}
				alt="배너에 들어가는 체인 아이콘"
				style={{ width: "auto", height: "auto" }}
			/>
		),
	},
	{
		title: "오늘의 짠 팁",
		subtitle: "짜디짠 소금이들이 인정한 소금 팁",
		icon: (
			<Image
				src={lightBlub}
				width={200}
				height={200}
				alt="배너에 들어가는 체인 아이콘"
			/>
		),
	},
	{
		title: "소금쟁이 왕중왕",
		subtitle: "소금모아 기적을 만들어낸 소금쟁이들의 업적을 확인해보세요",
		icon: (
			<Image
				src={proudCharacter}
				width={200}
				height={200}
				alt="배너에 들어가는 뿌듯한 소금 캐릭터"
			/>
		),
	},
];

export default mainBannerData;
