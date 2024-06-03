import Link from "next/link";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import SuccessBadge from "@components/SuccessBadge";
import badgeData from "@components/SuccessBadge/BadgeData";

const BadgeCollection = () => {
	return (
		<ContentSection title="뱃지 컬렉션" childrenClassName="flex-col gap-[20px]">
			<Link href="/userinfo/badges" className="self-end">
				더 보기
			</Link>
			<Card highlight={false} className="flex flex-row gap-[20px] p-[20px]">
				{badgeData
					.filter((badge) => badge.id !== 0)
					.map((badge) => (
						<SuccessBadge
							key={badge.id}
							stroke={badge.stroke}
							fill={badge.fill}
							contentType={badge.contentType as "text" | "image"}
							content={badge.content}
							alt={badge.alt}
							className="w-[120px] h-[120px]"
						/>
					))}
			</Card>
		</ContentSection>
	);
};

export default BadgeCollection;
