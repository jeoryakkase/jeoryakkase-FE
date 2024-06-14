"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlOptionsVertical } from "react-icons/sl";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import { Badge } from "@components/shadcn/ui/Badge";
import { calculateDaysLeft } from "@containers/naegong/asset/cardCalculate";
import memberChallengesQueryOption from "@services/user/challenges";
import { useQuery } from "@tanstack/react-query";

import statusColorClasses from "../assets/challengeStatusColorClasses";
import formatDate from "../assets/formatDate";
import { MemberChallenge } from "../types";
import DropdownMenuEdit from "../userInfoEdit/UI/DropDownEdit";

const UserInfoChallengeHistory = () => {
	const router = useRouter();
	const { data: memberChallenges } = useQuery<MemberChallenge[]>({
		...memberChallengesQueryOption.getMemberChallenges(),
	});

	const inProgressChallenges =
		memberChallenges?.filter(
			(challenge) => challenge.challengeStatus === "IN_PROGRESS",
		) || [];

	const completedChallenges =
		memberChallenges?.filter(
			(challenge) => challenge.challengeStatus === "COMPLETED",
		) || [];

	const cancelledChallenges =
		memberChallenges?.filter(
			(challenge) => challenge.challengeStatus === "CANCELLED",
		) || [];
	const item = [
		{ id: 1, label: "포기하기" },
		{ id: 2, label: "공유하기" },
	];
	return (
		<div>
			<ContentSection title="진행중인 챌린지">
				<div className="flex flex-wrap gap-[20px]">
					{inProgressChallenges?.map((challenge) => (
						<Card
							key={challenge.id}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative ${statusColorClasses.IN_PROGRESS}`}
						>
							<Card.Header
								title={challenge.challengeDto.challengeTitle}
								className="p-0"
							/>

							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>
									{calculateDaysLeft(challenge.startDate, challenge.endDate)}
								</p>
								{challenge.certificationChallengeDtos.length > 0 &&
									challenge.certificationChallengeDtos[0]
										.certificationChallengeImageDtos && (
										<Image
											src={
												challenge.certificationChallengeDtos[0]
													.certificationChallengeImageDtos[0].imageUrl
											}
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover rounded-md w-[130px] h-[130px]"
										/>
									)}

								<p>
									{challenge.challengeDto.challengeType === "COUNT"
										? `인증 횟수: ${challenge.authCount} / ${challenge.challengeDto.challengeCount} 번`
										: `목표 금액: ${challenge.totalSaveMoney} / ${challenge.challengeDto.challengeGoal} 원`}
								</p>
								<div>
									{formatDate(challenge.startDate)} ~
									{formatDate(challenge.endDate)}
								</div>

								<DropdownMenuEdit
									trigger={
										<Button
											variant="ghost"
											size="icon"
											bgColor="transparent"
											shadow="transparent"
										>
											<SlOptionsVertical />
										</Button>
									}
									menuItems={item}
									className="absolute top-[30px] right-[20px]"
									childrenClassName="bg-main-lightyellow "
									menuClick={(itemId) => {
										if (itemId === 1) {
											router.push(
												`/userinfo/challenge-history/${challenge.id}/giveupmodal`,
											);
										} else if (itemId === 2) {
											// 공유하기 버튼 클릭 시 처리할 로직 추가
										}
									}}
								/>
							</Card.Content>
						</Card>
					))}
				</div>
			</ContentSection>
			<ContentSection title="완료된 챌린지">
				<div className="flex flex-wrap gap-[20px]">
					{completedChallenges?.map((challenge) => (
						<Card
							key={challenge.id}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative border-none ${statusColorClasses.COMPLETED}`}
						>
							<Card.Header
								title={challenge.challengeDto.challengeTitle}
								className="p-0"
							/>
							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>
									{calculateDaysLeft(challenge.startDate, challenge.endDate)}
								</p>
								{challenge.certificationChallengeDtos.length > 0 &&
									challenge.certificationChallengeDtos[0]
										.certificationChallengeImageDtos && (
										<Image
											src={
												challenge.certificationChallengeDtos[0]
													.certificationChallengeImageDtos[0].imageUrl
											}
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover rounded-md w-[130px] h-[130px]"
										/>
									)}

								<p>
									{challenge.challengeDto.challengeType === "COUNT"
										? `인증 횟수: ${challenge.authCount} / ${challenge.challengeDto.challengeCount} 번`
										: `목표 금액: ${challenge.totalSaveMoney} / ${challenge.challengeDto.challengeGoal} 원`}
								</p>
								<div>
									{formatDate(challenge.startDate)} ~
									{formatDate(challenge.endDate)}
								</div>
							</Card.Content>
							<Card className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none">
								<div />
							</Card>
							<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
								<div className="">
									<Image
										src={challenge.challengeDto.badgeDto.badgeImage}
										alt={challenge.challengeDto.badgeDto.badgeDesc}
										width={0}
										height={0}
										sizes="100vw"
										className="static w-[100px] h-[100px] object-cover"
									/>
								</div>
								<div>
									<Badge bgColor="lightblue" className="text-black">
										정말 대단하시군요!
									</Badge>
									<Badge bgColor="lightblue" className="text-black">
										정말 대단하시군요!
									</Badge>
								</div>
							</div>
						</Card>
					))}
				</div>
			</ContentSection>
			<ContentSection title="포기한 챌린지">
				<div className="flex flex-wrap gap-[20px]">
					{cancelledChallenges?.map((challenge) => (
						<Card
							key={challenge.id}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative ${statusColorClasses.CANCELLED}`}
						>
							<Card.Header
								title={challenge.challengeDto.challengeTitle}
								className="p-0"
							/>
							<DropdownMenuEdit
								trigger={<SlOptionsVertical />}
								menuItems={item}
								className="absolute top-[30px] right-[20px]"
								childrenClassName="bg-main-lightyellow "
							/>
							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>
									{calculateDaysLeft(challenge.startDate, challenge.endDate)}
								</p>
								{challenge.certificationChallengeDtos.length > 0 &&
									challenge.certificationChallengeDtos[0]
										.certificationChallengeImageDtos && (
										<Image
											src={
												challenge.certificationChallengeDtos[0]
													.certificationChallengeImageDtos[0].imageUrl
											}
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover rounded-md w-[130px] h-[130px]"
										/>
									)}

								<p>
									{challenge.challengeDto.challengeType === "COUNT"
										? `인증 횟수: ${challenge.authCount} / ${challenge.challengeDto.challengeCount} 번`
										: `목표 금액: ${challenge.totalSaveMoney} / ${challenge.challengeDto.challengeGoal} 원`}
								</p>
								<div>
									{formatDate(challenge.startDate)} ~
									{formatDate(challenge.endDate)}
								</div>
							</Card.Content>
						</Card>
					))}
				</div>
			</ContentSection>
		</div>
	);
};

export default UserInfoChallengeHistory;
