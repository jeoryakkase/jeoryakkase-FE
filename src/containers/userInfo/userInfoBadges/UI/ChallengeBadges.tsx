import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import challengHistoryData from "@containers/userInfo/assets/challengHistoryData";

import SuccessBadge from "../../../../components/SuccessBadge/index";

const ChallengeBadges = () => {
	const challengesWithBadges = challengHistoryData.filter(
		(challenge) => challenge.badge,
	);
	return (
		<ContentSection
			title="챌린지 뱃지"
			className="gap-[20px] overflow-x-scroll"
			childrenClassName="gap-[40px]"
		>
			{challengesWithBadges.map((challenge) => (
				<Card
					key={challenge.id}
					highlight={false}
					className="flex flex-col gap-[20px] items-start w-[300px] h-[300px] overflow-hidden text-ellipsis "
				>
					<Card.Header title={challenge.title} />
					<Card.Content>
						<p>한달</p>
						{challenge.badge && (
							<SuccessBadge
								contentType="image"
								content={challenge.badge}
								className="w-[120px] h-[120px]"
								imageClassName="w-[100px] h-[100px]"
							/>
						)}
					</Card.Content>
				</Card>
			))}
		</ContentSection>
	);
};

export default ChallengeBadges;
