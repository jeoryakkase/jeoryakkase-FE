import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import SuccessBadge from "@components/SuccessBadge";
// import challengHistoryData from "@containers/userInfo/assets/challengHistoryData";
import { MebmberChallengesBadges } from "@containers/userInfo/types";

interface ChallengeBadgesProps {
	memberbadges: MebmberChallengesBadges[];
}
const ChallengeBadges = ({ memberbadges }: ChallengeBadgesProps) => {
	// const challengesWithBadges = challengHistoryData.filter(
	// 	(challenge) => challenge.badge,
	// );
	return (
		<ContentSection
			title="챌린지 뱃지"
			className="gap-[20px] overflow-x-scroll"
			childrenClassName="gap-[40px]"
		>
			{memberbadges?.map((challenge) => (
				<Card
					key={challenge.name}
					className="flex flex-col gap-[20px] items-start w-[300px] h-[300px] overflow-hidden text-ellipsis "
				>
					<Card.Header title={challenge.name} />
					<Card.Content>
						<p>{challenge.badgeDesc}</p>
						<SuccessBadge
							contentType="image"
							content={challenge.badgeImage}
							className="w-[120px] h-[120px]"
							imageClassName="w-[72px] h-[72px]"
						/>
					</Card.Content>
				</Card>
			))}
		</ContentSection>
	);
};

export default ChallengeBadges;
