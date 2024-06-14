import Link from "next/link";

import { ContentSection } from "@components/ContentSection";
import TagCard from "@components/TagCard";
import { UserChallenge } from "@stores/UserChallenge/useUserChallenge";

interface ChallengeProps {
	challenges: UserChallenge[];
}

const UserChallenges = ({ challenges }: ChallengeProps) => {
	console.log(challenges[0].id);
	return (
		<ContentSection
			title="참여 중인 챌린지"
			childrenClassName="flex flex-row justify-start space-x-10 overflow-x-auto scrollbar-hide"
		>
			{challenges.map((challenge) => (
				<Link
					key={challenge.id}
					href={{
						pathname: `/challenge/${challenge.id}`,
						query: { memeberChallengeId: challenge.memeberChallengeId },
					}}
				>
					<TagCard
						key={challenge.id}
						title={challenge.title}
						description={challenge.description}
						startDate={challenge.startDate}
						endDate={challenge.endDate}
						today={challenge.today}
						dueDate={challenge.dueDate}
						className="w-[350px] h-[350px] flex-shrink-0"
						imgs={challenge.imgs}
						countDay={challenge.countDay}
					/>
				</Link>
			))}
		</ContentSection>
	);
};

export default UserChallenges;
