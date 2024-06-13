import Link from "next/link";

import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import { Challenge } from "@containers/challenge/types";

import ArrangedCard from "./ArrangedCard";

interface AllChallengeProps {
	allChallenge: Challenge[];
}

const PreviewAllChallenge = ({ allChallenge }: AllChallengeProps) => {
	return (
		<ContentSection
			title="전체 챌린지"
			childrenClassName="flex flex-col justify-center"
		>
			<Flex direction="column" align="center">
				<div className="w-full flex justify-end mr-60 mb-4">
					<Link href="/challenge/allChallenge">
						<div>더보기</div>
					</Link>
				</div>

				<ArrangedCard allChallenge={allChallenge} />
			</Flex>
		</ContentSection>
	);
};

export default PreviewAllChallenge;
