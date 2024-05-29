import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";

import GoalCard from "./GoalCard";

const BlankGoal = () => {
	return (
		<ContentSection title="소금이의 내공은?">
			<Flex direction="row" justify="start" align="center" gap={10}>
				<GoalCard title="100만원 모으기" percentage={30} />
				<GoalCard title="조던신발 사기" percentage={30} />
				<GoalCard title="적금 매달 10만원" percentage={60} />
			</Flex>
		</ContentSection>
	);
};

export default BlankGoal;
