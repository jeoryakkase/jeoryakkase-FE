import { ContentSection } from "@components/ContentSection";
import GoalCard from "./GoalCard";
import Flex from "@components/Flex";

const Goal = () => {
	return (
		<ContentSection title="소금이의 내공은?">
			<Flex direction="row" justify="start" align="center" gap={10}>
				<GoalCard />
				<GoalCard />
				<GoalCard />
			</Flex>
		</ContentSection>
	);
};

export default Goal;
