import Link from "next/link";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import SuccessBadge from "@components/SuccessBadge";
import { MemberChallengesBadges } from "@containers/userInfo/types";

// import badgeData from "@components/SuccessBadge/BadgeData";
interface BadgeCollectionProps {
	memberbadges: MemberChallengesBadges[];
}
const BadgeCollection = ({ memberbadges }: BadgeCollectionProps) => {
	const badges = memberbadges || [];
	return (
		<ContentSection title="뱃지 컬렉션" childrenClassName="flex-col gap-[20px]">
			<Link href="/userinfo/badges" className="self-end">
				더 보기
			</Link>
			<Card className="flex flex-row gap-[20px] p-[20px]">
				{badges.map((badge) => (
					<SuccessBadge
						key={badge.name}
						stroke={badge.stroke}
						fill={badge.fill}
						contentType="image"
						content={badge.badgeImage}
						alt={badge.badgeDesc}
						className="w-[120px] h-[120px]"
					/>
				))}
			</Card>
		</ContentSection>
	);
};

export default BadgeCollection;
