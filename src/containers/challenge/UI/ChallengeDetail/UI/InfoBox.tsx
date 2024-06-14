import Image from "next/image";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import Progress from "@components/shadcn/ui/Progress";
import SuccessBadge from "@components/SuccessBadge";
import showToast from "@lib/toastConfig";
import postJoinChallenge from "@services/challenge/postJoinChallenge";
import useAuthStore from "@stores/Auth/useUserAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const getIndicatorClassName = (percentage: number): string => {
	if (percentage < 50) return "bg-point-red";
	if (percentage >= 50 && percentage < 90) return "bg-main-yellow";
	return "bg-main-lightblue";
};

const InfoBox = ({ challengeDetail, isJoined, challengeId }) => {
	const { isLogined, user } = useAuthStore();
	const indicatorClassName = getIndicatorClassName(challengeDetail.percentage);
	const queryClient = useQueryClient();
	const { mutate: joinChallengeMutate } = useMutation({
		mutationFn: () => postJoinChallenge(challengeId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["challengeInfo", "challengeInfos"],
			});
		},
		onError: () => {
			showToast({ type: "error", message: "챌린지 참여에 실패했습니다." });
		},
	});

	const handleJoinChallenge = () => {
		joinChallengeMutate();
	};

	return (
		<ContentSection
			title={challengeDetail.title}
			childrenClassName="flex flex-col items-center"
		>
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
						{isLogined && isJoined && (
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
					{isLogined && isJoined && (
						<Card
							highlight=""
							className="flex flex-row w-full border-transparent shadow-none p-0"
						>
							<div className="flex flex-col w-full items-start">
								<Card.Header
									title={`${user?.nickname}님의 챌린지 진행도`}
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
				{!isJoined && (
					<Flex align="end" justify="end" className="w-[200px]">
						<Button
							onClick={handleJoinChallenge}
							bgColor="midblue"
							className="mr-3"
						>
							참여하고 뱃지 받기
						</Button>
					</Flex>
				)}
			</Card>
			{!isJoined && (
				<Card className="flex flex-col mt-10 w-[400px]">
					<Card.Header title="획득 가능한 뱃지" />
					<Card.Content className="flex flex-col items-center">
						<div className="mt-5 mb-5 font-semibold">
							{challengeDetail.badgeName}
						</div>
						<SuccessBadge
							contentType="image"
							className="w-[100px] h-[100px]"
							content={challengeDetail.image}
							fill="yellow"
						/>
						<div className="mt-5 ">{challengeDetail.badgeDescription}</div>
					</Card.Content>
				</Card>
			)}
		</ContentSection>
	);
};

export default InfoBox;
