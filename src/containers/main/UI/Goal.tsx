import { ContentSection } from "@components/ContentSection";
import GoalCard from "./GoalCard";
import Flex from "@components/Flex";

const Goal = () => {
	return (
		<ContentSection title="소금이의 내공은?">
			<Flex direction="row" justify="start" align="center" gap={10}>
				<GoalCard title="들어가겠지 map으로" percentage={30} />
			</Flex>
		</ContentSection>
	);
};

export default Goal;
