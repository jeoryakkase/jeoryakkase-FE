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
				<div className="m-4 p-6">
					<Image
						src={questionIcon}
						alt="Question Icon"
						width={80}
						height={80}
					/>
				</div>
				<div className="flex flex-col items-start">
					<Card.Header title={voteTitle} className="ml-6 mb-2 mt-3" />
					<Card.Content>
						<p className="mb-3">{voteContent}</p>
						<Button
							bgColor="lightblue"
							className="mr-3 rounded-3xl text-s"
							size="lg"
						>
							허
						</Button>
						<Button
							bgColor="red"
							className="mr-5 rounded-3xl text-s text-white"
							size="lg"
						>
							불허
						</Button>
						<Button bgColor="lightyellow">
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
				<div className="flex flex-col flex-grow items-start">
					<Card.Header
						title={tipTitle}
						className="flex flex-row justify-start ml-6 mb-3"
					/>
					<Card.Content>
						<p className="mb-3">{tipContent}</p>
						<Button bgColor="lightyellow">짠맛나는 짠팁 보러가기</Button>
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
