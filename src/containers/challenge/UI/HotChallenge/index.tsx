import { ContentSection } from "@components/ContentSection";
import TagCard from "@components/TagCard";

export interface Challenge {
	id: string;
	title: string;
	imgs: { id: string; img: string }[] | string;
	description: string;
	messages: string;
}

interface HotChallengeCardProps {
	hotChallenges: Challenge[];
}

const HotChallenge = ({ hotChallenges }: HotChallengeCardProps) => {
	return (
		<ContentSection
			title="실시간 인기 챌린지"
			childrenClassName="flex flex-wrap justify-start"
		>
			{hotChallenges.map((hotChallenge) => (
				<div key={hotChallenge.id} className="mr-6 mb-6 ">
					<TagCard
						title={hotChallenge.title}
						description={hotChallenge.description}
						className="w-[300px] h-[300px] flex-shrink-0"
						tagMessage={hotChallenge.messages}
						imgs={hotChallenge.imgs}
					/>
				</div>
			))}
		</ContentSection>
	);
};

export default HotChallenge;
