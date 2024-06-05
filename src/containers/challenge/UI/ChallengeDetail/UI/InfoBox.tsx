import Image from "next/image";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import ProgressCard from "@components/ProgressCard";
import { Badge } from "@components/shadcn/ui/Badge";
import useAuthStore from "@stores/Auth/useUserAuth";

const InfoBox = ({ challengeDetail }) => {
	const { isLogined, nickname } = useAuthStore();
	return (
		<ContentSection title={challengeDetail.title}>
			<Card highlight="" className="flex flex-row w-full">
				<Image
					width={300}
					height={300}
					src={challengeDetail.image}
					alt="챌린지 아이콘 이미지"
				/>
				<div className="flex flex-col items-start ml-10 w-100">
					<Card.Header title={challengeDetail.title} />
					<div>
						{challengeDetail.info.map((challengeInfo) => (
							<Badge
								key={challengeInfo}
								size="m"
								bgColor="yellow"
								className="mr-3"
							>
								{challengeInfo}
							</Badge>
						))}
						{isLogined && challengeDetail.isJoined && <Badge> 참여 중</Badge>}
					</div>
					<div className="mt-5 mb-10">{challengeDetail.detail}</div>
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
				<Flex align="end" justify="end">
					<Button className="mr-3">참여하고 뱃지 받기</Button>
				</Flex>
			</Card>
		</ContentSection>
	);
};

export default InfoBox;
