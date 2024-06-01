import Image from "next/image";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import ProgressCard from "@components/ProgressCard";
import { Badge } from "@components/shadcn/ui/Badge";
import useAuthStore from "@stores/Auth/useUserAuth";

const InfoBox = ({ challengeDetail }) => {
	const { isLogined, nickname } = useAuthStore();
	return (
		<ContentSection title={challengeDetail.title}>
			<Card highlight={false} className="flex">
				<Image
					width={150}
					height={150}
					src={challengeDetail.image}
					alt="챌린지 아이콘 이미지"
				/>
				<div className="flex flex-col">
					<Card.Header title={challengeDetail.title} />
					<div>
						{challengeDetail.info.map((challengeInfo) => (
							<Badge key={challengeInfo}>{challengeInfo}</Badge>
						))}
						{isLogined && challengeDetail.isJoined && <Badge> 참여 중</Badge>}
					</div>
					<div>{challengeDetail.detail}</div>
					{isLogined && challengeDetail.isJoined && (
						<ProgressCard
							title={`${nickname}님의 챌린지 진행도`}
							percentage={challengeDetail.percentage}
							leftDay={challengeDetail.leftDay}
							progressDay={challengeDetail.progressDay}
							dayCount={challengeDetail.dayCount}
						/>
					)}
				</div>
				<Button>참여하고 뱃지 받기</Button>
			</Card>
		</ContentSection>
	);
};

export default InfoBox;
