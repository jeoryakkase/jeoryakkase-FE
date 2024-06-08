import Image from "next/image";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import Progress from "@components/shadcn/ui/Progress";
import useAuthStore from "@stores/Auth/useUserAuth";

const getIndicatorClassName = (percentage: number): string => {
	if (percentage < 50) return "bg-point-red";
	if (percentage >= 50 && percentage < 90) return "bg-main-yellow";
	return "bg-main-lightblue";
};

const InfoBox = ({ challengeDetail }) => {
	const { isLogined, nickname } = useAuthStore();
	const indicatorClassName = getIndicatorClassName(challengeDetail.percentage);
	return (
		<ContentSection title={challengeDetail.title}>
			<Card highlight="" className="flex flex-row w-full p-6">
				<Image
					width={322}
					height={322}
					src={challengeDetail.image}
					alt="챌린지 아이콘 이미지"
					className="rounded-3xl"
				/>
				<div className="flex flex-col items-start ml-10 w-full">
					<Card.Header
						title={challengeDetail.title}
						className="ml-4 mb-2 font-semibold text-base"
					/>
					<div className="ml-6">
						{challengeDetail.info.map((challengeInfo) => (
							<Badge
								key={challengeInfo}
								size="m"
								bgColor="yellow"
								className="mr-3 text-sm"
							>
								{challengeInfo}
							</Badge>
						))}
						{isLogined && challengeDetail.isJoined && (
							<Badge
								variant="default"
								size="m"
								bgColor="midblue"
								className="text-white text-sm"
							>
								{" "}
								참여 중
							</Badge>
						)}
					</div>
					<div className="mt-4 mb-10 ml-6">{challengeDetail.detail}</div>
					{isLogined && challengeDetail.isJoined && (
						<Card
							highlight=""
							className="flex flex-row w-full border-transparent shadow-none p-0"
						>
							<div className="flex flex-col w-full items-start">
								<Card.Header
									title={`${nickname}님의 챌린지 진행도`}
									className="ml-4 font-medium text-sm p-0"
								/>
								<Card.Content className="w-11/12 flex flex-col mt-1">
									<div className="text-end text-sm mb-2">
										{challengeDetail.percentage}%
									</div>
									<Progress
										value={challengeDetail.percentage}
										indicatorClassName={indicatorClassName}
										className="h-3"
									/>
									<div className="flex flex-row mt-5 justify-between items-center">
										<div className="mr-3">
											<div className="text-s">오늘까지</div>
											{challengeDetail.progressDay}일 인증완료
										</div>
										<div className="mr-3">
											{challengeDetail.dayCount}일째 진행 중
										</div>
										<div>D-{challengeDetail.leftDay}</div>
									</div>
								</Card.Content>
							</div>
						</Card>
					)}
				</div>
				{!isLogined && (
					<Flex align="end" justify="end" className="w-[200px]">
						<Button className="mr-3">참여하고 뱃지 받기</Button>
					</Flex>
				)}
			</Card>
		</ContentSection>
	);
};

export default InfoBox;
