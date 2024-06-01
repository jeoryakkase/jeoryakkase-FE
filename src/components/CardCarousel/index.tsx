import { useEffect, useRef, useState } from "react";

import GoalCard from "@containers/main/UI/GoalSection/GoalCard";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../shadcn/ui/Carousel";

interface Goal {
	id: string;
	img: string;
	title: string;
	percentage: number;
	leftMoney: number;
	dayCount: number;
	leftDay: number;
}

interface CardCarouselsProps {
	goalCardData: Goal[];
}

const CardCarousels = ({ goalCardData }: CardCarouselsProps) => {
	const chunkedGoals = goalCardData.reduce<Goal[][]>(
		(resultArray, item, index) => {
			const chunkIndex = Math.floor(index / 2);

			if (!resultArray[chunkIndex]) {
				return [...resultArray, [item]];
			}

			resultArray[chunkIndex].push(item);

			return resultArray;
		},
		[],
	);

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
	const totalPages = chunkedGoals.length;
	const isInitialMount = useRef(true);

	const handlePrev = () => {
		if (carouselApi) {
			carouselApi.scrollPrev();
		}
	};

	const handleNext = () => {
		if (carouselApi) {
			carouselApi.scrollNext();
		}
	};

	useEffect(() => {
		if (carouselApi) {
			const onSelect = () => {
				setSelectedIndex(carouselApi.selectedScrollSnap());
			};

			carouselApi.on("select", onSelect);
			if (isInitialMount.current) {
				onSelect();
				isInitialMount.current = false;
			}

			return () => {
				carouselApi.off("select", onSelect);
			};
		}
	}, [carouselApi]);

	return (
		<div className="relative">
			<Carousel className="w-full max-w-5xl mb-16" setApi={setCarouselApi}>
				<CarouselContent className="flex flex-grow">
					{chunkedGoals.map((goalPair) => (
						<CarouselItem key={goalPair.map((goal) => goal.id).join("-")}>
							<div className="flex space-x-4">
								{goalPair.map((goal) => (
									<GoalCard
										key={goal.id}
										title={goal.title}
										percentage={goal.percentage}
										img={goal.img}
										leftMoney={goal.leftMoney}
										dayCount={goal.dayCount}
										leftDay={goal.leftDay}
										className="w-400 h-250"
									/>
								))}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="absolute bottom-4 right-4 flex space-x-2">
					<CarouselPrevious
						onClick={handlePrev}
						className="h-8 w-8 rounded-full bg-white shadow-lg"
					/>
					<CarouselNext
						onClick={handleNext}
						className="h-8 w-8 rounded-full bg-white shadow-lg"
					/>
				</div>
			</Carousel>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{Array.from({ length: totalPages }).map((_, index) => (
					<div
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						className={`h-2 w-2 mx-1 rounded-full ${index === selectedIndex ? "bg-black" : "bg-gray-300"}`}
					/>
				))}
			</div>
		</div>
	);
};

export default CardCarousels;
