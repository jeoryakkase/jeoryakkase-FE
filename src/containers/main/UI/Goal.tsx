import { ContentSection } from "@components/ContentSection";
import GoalCard from "./GoalCard";

const Goal = () => {
	return (
		<ContentSection
			title="소금이의 내공은?"
			childrenClassName="flex flex-row justify-center space-x-10 my-10"
			itemClassName="flex-grow"
		>
			<GoalCard />
			<GoalCard />
			<GoalCard />
		</ContentSection>
	);
};

export default Goal;
