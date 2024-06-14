import GoalCard from "@containers/main/UI/GoalSection/GoalCard";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../shadcn/ui/Carousel";

export interface Goal {
	id: string;
	img: string;
	title: string;
	percentage: number;
	leftMoney: number;
	dayCount: number;
	leftDay: number;
	nickname: string;
}

interface CardCarouselsProps {
	goalCardData: Goal[];
}

const chunkArray = <T,>(array: T[], size: number): T[][] => {
	const chunkedArr: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		chunkedArr.push(array.slice(i, i + size));
	}
	return chunkedArr;
};

const CardCarousels = ({ goalCardData }: CardCarouselsProps) => {
	const groupedData = chunkArray(goalCardData, 2);

	return (
		<Carousel className="w-full mb-6">
			<CarouselPrevious className="h-8 w-8 rounded-full bg-white shadow-lg" />
			<CarouselContent>
				{groupedData.map((group, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<CarouselItem key={index} className="flex justify-center">
						<div className="flex justify-center space-x-4">
							{group.map((goal) => (
								<GoalCard
									key={goal.id}
									title={goal.title}
									percentage={goal.percentage}
									img={goal.img}
									leftMoney={goal.leftMoney}
									dayCount={goal.dayCount}
									leftDay={goal.leftDay}
									className="w-[600px] h-[220px] mr-5"
								/>
							))}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselNext className="h-8 w-8 rounded-full bg-white shadow-lg" />
		</Carousel>
	);
};

export default CardCarousels;
