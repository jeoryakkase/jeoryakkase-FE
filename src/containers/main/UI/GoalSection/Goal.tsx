import CardCarousels from "@components/CardCarousel";
import { ContentSection } from "@components/ContentSection";

interface GoalProps {
	goals: Array<{
		id: string;
		img: string;
		title: string;
		percentage: number;
		leftMoney: number;
		dayCount: number;
		leftDay: number;
		nickname: string;
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
