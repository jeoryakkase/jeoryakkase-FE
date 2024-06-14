import Link from "next/link";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import { Badge } from "@components/shadcn/ui/Badge";
import SuccessBadge from "@components/SuccessBadge";
import { calculateDaysLeft } from "@containers/naegong/asset/cardCalculate";
import statusColorClasses from "@containers/userInfo/assets/challengeStatusColorClasses";
import formatDate from "@containers/userInfo/assets/formatDate";
import { MemberChallenge } from "@containers/userInfo/types";

interface ChallengeHistoryProps {
	challenges: MemberChallenge[];
}
const ChallengeHistory = ({ challenges = [] }: ChallengeHistoryProps) => {
	const certificationNeeded = challenges
		.filter((challenge) => challenge.challengeStatus === "IN_PROGRESS")
		.slice(0, 2);
	const certificationCompleted = challenges
		.filter((challenge) => challenge.challengeStatus === "CANCELLED")
		.slice(0, 2);
	const progressCompleted = challenges
		.filter((challenge) => challenge.challengeStatus === "COMPLETED")
		.slice(0, 4);
	return (
		<ContentSection
			title="챌린지 히스토리"
			childrenClassName="flex-col gap-[20px]"
		>
			<Link href="/userinfo/challenge-history" className="self-end">
				더 보기
			</Link>
			<div className="flex justify-between">
				<div className="w-[50%]">
					<div className="flex gap-[20px]">
						<div className="flex flex-col gap-[20px]">
							<h2> 진행중인 챌린지</h2>
							{certificationNeeded.map((challenge) => {
								const colorClasses =
									statusColorClasses[challenge.challengeStatus];
								return (
									<Card
										key={challenge.id}
										className={`flex flex-col gap-[10px] p-[20px] ${colorClasses}`}
									>
										<div className="flex gap-[20px] justify-between">
											<h2 className="text-[20px] font-bold ">
												{challenge.challengeDto.challengeTitle}
											</h2>
											<p>
												{calculateDaysLeft(
													challenge.startDate,
													challenge.endDate,
												)}
											</p>
										</div>
										<Card.Content className="p-0 flex flex-col gap-[30px]">
											<div className=" flex flex-col gap-[10px]">
												<Badge bgColor="yellow">
													<p>잘하고 있어요 👍</p>
												</Badge>
												<Badge bgColor="yellow">
													<p>좀 더 힘내세요 👏</p>
												</Badge>
											</div>
											<p>
												{formatDate(challenge.startDate)} ~
												{formatDate(challenge.endDate)}
											</p>
										</Card.Content>
									</Card>
								);
							})}
						</div>
						<div className="flex flex-col gap-[20px]">
							<h2> 포기한 챌린지</h2>
							{certificationCompleted.map((challenge) => {
								const colorClasses =
									statusColorClasses[challenge.challengeStatus];
								return (
									<Card
										key={challenge.id}
										className={`flex flex-col gap-[10px] p-[20px] ${colorClasses}`}
									>
										<div className="flex gap-[20px] justify-between">
											<h2 className="text-[20px] font-bold ">
												{challenge.challengeDto.challengeTitle}
											</h2>
											<p>
												{calculateDaysLeft(
													challenge.startDate,
													challenge.endDate,
												)}
											</p>
										</div>
										<Card.Content className="p-0 flex flex-col gap-[30px]">
											<div className=" flex flex-col gap-[10px]">
												<Badge bgColor="red">
													<p>포기하지 마세요 😵</p>
												</Badge>
												<Badge bgColor="red">
													<p>다시 도전해보세요 🥹</p>
												</Badge>
											</div>
											<p>
												{formatDate(challenge.startDate)} ~
												{formatDate(challenge.endDate)}
											</p>
										</Card.Content>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
				<div className="flex flex-col w-[50%]">
					<h2> 완료된 챌린지</h2>
					<div className="flex flex-wrap gap-[20px] ">
						{progressCompleted.map((challenge) => {
							const colorClasses =
								statusColorClasses[challenge.challengeStatus];
							return (
								<Card
									key={challenge.id}
									className={`flex flex-col gap-[10px] p-[20px] w-[40%] relative border-none ${colorClasses}`}
								>
									<div className="flex gap-[20px] justify-between">
										<h2 className="text-[20px] font-bold ">
											{challenge.challengeDto.challengeTitle}
										</h2>
										<p>
											{calculateDaysLeft(
												challenge.startDate,
												challenge.endDate,
											)}
										</p>
									</div>
									<Card.Content className="p-0 flex flex-col gap-[30px]">
										<div className=" flex flex-col gap-[10px]">
											<Badge bgColor="lightblue">
												<p>정말 대단해요 👍</p>
											</Badge>
											<Badge bgColor="lightblue">
												<p>수고하셨어요 😎</p>
											</Badge>
										</div>
										<p>
											{formatDate(challenge.startDate)} ~
											{formatDate(challenge.endDate)}
										</p>
									</Card.Content>
									{challenge.challengeDto.badgeDto && (
										<div>
											<Card className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none">
												<div />
											</Card>
											<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
												<Badge bgColor="lightblue" className="text-black">
													챌린지 완료
												</Badge>

												<SuccessBadge
													contentType="image"
													fill={challenge.challengeDto.badgeDto.fill}
													content={challenge.challengeDto.badgeDto.badgeImage}
													alt={challenge.challengeDto.badgeDto.badgeDesc}
													className="w-[120px] h-[120px]"
													imageClassName="w-[72px] h-[72px]"
												/>
											</div>
										</div>
										// <ChallengeCompleted badge={challenge.badge} />
									)}
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</ContentSection>
	);
};

export default ChallengeHistory;
