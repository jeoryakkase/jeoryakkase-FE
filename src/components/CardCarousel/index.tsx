import GoalCard from "@containers/main/UI/GoalSection/GoalCard";

import {
	Carousel,
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
	return (
		<Carousel className="w-full mb-16">
			<CarouselPrevious className="h-8 w-8 rounded-full bg-white shadow-lg" />
			<CarouselContent>
				{goalCardData.map((goal, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<CarouselItem key={index}>
						<GoalCard
							key={goal.id}
							title={goal.title}
							percentage={goal.percentage}
							img={goal.img}
							leftMoney={goal.leftMoney}
							dayCount={goal.dayCount}
							leftDay={goal.leftDay}
							className="w-[600px] h-[400px]"
						/>
					</CarouselItem>
				))}
			</CarouselContent>

			<CarouselNext className="h-8 w-8 rounded-full bg-white shadow-lg" />
		</Carousel>
	);
};

export default CardCarousels;
