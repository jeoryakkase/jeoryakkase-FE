import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import { Challenge } from "@containers/challenge/types";

import ArrangedCard from "./UI/ArrangedCard";

interface AllChallengeProps {
	allChallenge: Challenge[];
}

const AllChallenge = ({ allChallenge }: AllChallengeProps) => {
	return (
		<ContentSection
			title="전체 챌린지"
			childrenClassName="flex flex-col justify-center"
		>
			<Flex direction="column" justify="center">
				<ArrangedCard allChallenge={allChallenge} />
			</Flex>
		</ContentSection>
	);
};

export default AllChallenge;
