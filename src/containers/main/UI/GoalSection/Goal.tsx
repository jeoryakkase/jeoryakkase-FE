import CardCarousels from "@components/CardCarousel";
import { ContentSection } from "@components/ContentSection";
// import Flex from "@components/Flex";

// import GoalCard from "./GoalCard";

interface GoalProps {
	goals: Array<{
		id: string;
		img: string;
		title: string;
		percentage: number;
		leftMoney: number;
		dayCount: number;
		leftDay: number;
	}>;
}

const Goal = ({ goals }: GoalProps) => {
	return (
		<ContentSection title="소금이의 내공은?">
			<CardCarousels goalCardData={goals} />
		</ContentSection>
	);
};

export default Goal;
