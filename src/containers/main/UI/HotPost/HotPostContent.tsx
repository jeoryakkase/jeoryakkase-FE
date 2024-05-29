import Image from "next/image";

import questionIcon from "@assets/images/iconImage/question.png";
import { Button } from "@components/Button";
import Card from "@components/Card";
import ZarangCard from "@components/ZarangCard";
import { dummyZarangData } from "@containers/main/dummy";

import CharacterCard from "./CharacterCard";

const HotPostContent = ({
	voteTitle,
	tipTitle,
	voteContent,
	tipContent,
	tipImg,
}) => {
	return (
		<section className="flex flex-col">
			<Card highlight="" className="flex-row items-center flex-grow mb-8 p-2">
				<div className="m-4">
					<Image
						src={questionIcon}
						alt="Question Icon"
						width={100}
						height={100}
					/>
				</div>
				<div>
					<Card.Header title={voteTitle} />
					<Card.Content>
						<p>{voteContent}</p>
						<Button variant="secondary" className="mr-3">
							허
						</Button>
						<Button variant="destructive">불허</Button>
						<Button variant="ghost">
							다른 소금이들의 허불허 구경하러 가기
						</Button>
					</Card.Content>
				</div>
			</Card>
			<Card
				highlight=""
				className=" flex flex-row items-center overflow-hidden mb-8"
			>
				<div className="relative">
					<Image
						src={tipImg}
						alt="짠팁 게시판 실시간 인기글"
						width={200}
						height={150}
						className="object-cover w-full h-150 rounded-lg"
					/>
				</div>
				<div className="flex-grow ml-4 overflow-hidden">
					<Card.Header title={tipTitle} />
					<Card.Content>
						<p>{tipContent}</p>
						<Button variant="ghost">짠맛나는 짠팁 보러가기</Button>
					</Card.Content>
				</div>
			</Card>
			<div className="flex flex-row space-x-4">
				{dummyZarangData.map((card) => (
					<ZarangCard key={card.id} {...card} />
				))}
				<CharacterCard />
			</div>
		</section>
	);
};

export default HotPostContent;
