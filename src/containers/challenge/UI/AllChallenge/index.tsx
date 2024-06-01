import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import { Chunk } from "@containers/challenge/dummy";

import ArrangedCard from "./UI/ArrangedCard";

interface AllChallengeProps {
	allChallenge: Chunk[];
}

const AllChallenge = ({ allChallenge }: AllChallengeProps) => {
	return (
		<ContentSection
			title="전체 챌린지"
			childrenClassName="flex flex-col justify-center"
		>
			<Flex direction="column" justify="center">
				{allChallenge.map((chunk) => (
					<ArrangedCard key={chunk.chunkId} allChallenge={chunk.challenges} />
				))}
			</Flex>
		</ContentSection>
	);
};

export default AllChallenge;
