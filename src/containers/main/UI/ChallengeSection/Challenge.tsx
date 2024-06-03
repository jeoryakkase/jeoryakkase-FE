import { ContentSection } from "@components/ContentSection";
import TagCard from "@components/TagCard";
import { UserChallenge } from "@stores/UserChallenge/useUserChallenge";

interface ChallengeProps {
	challenges: UserChallenge[];
}

// challenge, userInfo 에서도 사용하기 때문에 전역으로 관리하자
const Challenge = ({ challenges }: ChallengeProps) => {
	return (
		<ContentSection
			title="참여 중인 챌린지"
			childrenClassName="flex flex-row justify-start space-x-10 overflow-x-auto whitespace-nowrap"
		>
			{challenges.map((challenge) => (
				<TagCard
					key={challenge.id}
					title={challenge.title}
					description={challenge.description}
					startDate={challenge.startDate}
					endDate={challenge.endDate}
					today={challenge.today}
					dueDate={challenge.dueDate}
					className="w-[300px] h-[300px] inline-block"
				/>
			))}
		</ContentSection>
	);
};

export default Challenge;
