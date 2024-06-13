"use client";

import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlOptionsVertical } from "react-icons/sl";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import ProgressBarChart from "@components/ProgressBar";
import { Badge } from "@components/shadcn/ui/Badge";
import { progressGoalData } from "@containers/userInfo/assets/progressGoalData";
import DropdownMenuEdit from "@containers/userInfo/userInfoEdit/UI/DropDownEdit";
import goalsQueryOption from "@services/user/goals";
import { useQuery } from "@tanstack/react-query";

import { calculateDaysLeft, formatGoalAmount } from "./asset/cardCalculate";
import statusColorClasses from "./asset/statusColorClasses";
import { GoalItemType } from "./UI/NaegongValidation";

const Naegong = () => {
	const router = useRouter();
	const { data: goalData } = useQuery({
		...goalsQueryOption.getGoals(),
	});
	console.log(goalData);

	const inProgressGoals: GoalItemType[] = [];
	const completedGoals: GoalItemType[] = [];
	const abandonedGoals: GoalItemType[] = [];
	const failedGoals: GoalItemType[] = [];

	goalData?.content?.forEach((goal: GoalItemType) => {
		switch (goal.goalStatus) {
			case "PROCEEDING":
				inProgressGoals.push(goal);
				break;
			case "COMPLETE":
				completedGoals.push(goal);
				break;
			case "GIVE_UP":
				abandonedGoals.push(goal);
				break;
			case "FAILURE":
				failedGoals.push(goal);
				break;
			default:
				break;
		}
	});

	const item = [
		{ id: 1, label: "포기하기" },
		{ id: 2, label: "공유하기" },
	];

	return (
		<div>
			{/* 뱃지 추가해야함 */}

			<ContentSection title="진행중인 목표">
				<div className="flex flex-wrap gap-[20px]">
					{inProgressGoals &&
						inProgressGoals?.map((goal) => (
							<Card
								key={goal.id}
								className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative ${statusColorClasses.PROCEEDING}`}
							>
								<Card.Header
									title={`목표금액 : ${formatGoalAmount(goal.goalAmount)}원`}
									className="p-0"
								/>

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
											router.push(`/naegong/${goal.id}/giveupmodal`);
										} else if (itemId === 2) {
											// 공유하기 버튼 클릭 시 처리할 로직 추가
										}
									}}
								/>
								<Card.Content className="p-0 flex flex-col gap-[10px]">
									<p>
										{calculateDaysLeft(goal.goalStartDate, goal.goalEndDate)}
									</p>
									<div className=" w-[250px] h-[20px]">
										<ProgressBarChart
											data={progressGoalData(
												goal.currentAmount,
												goal.goalAmount,
											)}
										/>
									</div>
									<p>
										기간: {format(new Date(goal.goalStartDate), "yyyy-MM-dd")} ~{" "}
										{format(new Date(goal.goalEndDate), "yyyy-MM-dd")}
									</p>
								</Card.Content>
							</Card>
						))}
				</div>
			</ContentSection>
			<ContentSection title="완료된 목표">
				<div className="flex flex-wrap gap-[20px]">
					{completedGoals &&
						completedGoals?.map((goal) => (
							<Card
								key={goal.id}
								className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative border-none ${statusColorClasses.COMPLETE}`}
							>
								<Card.Header
									title={`목표금액: ${goal.goalAmount}원`}
									className="p-0"
								/>
								<Card.Content className="p-0 flex flex-col gap-[10px]">
									<p>
										{calculateDaysLeft(goal.goalStartDate, goal.goalEndDate)}
									</p>
									<p>
										기간: {format(new Date(goal.goalStartDate), "yyyy-MM-dd")} ~{" "}
										{format(new Date(goal.goalEndDate), "yyyy-MM-dd")}
									</p>
								</Card.Content>
								<Card className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none">
									<div />
								</Card>
								<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
									<div className="">
										<Image
											src="/images/character05.png"
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover  rounded-md w-[100%] "
										/>
									</div>
									<div>
										<Badge bgColor="lightblue" className="text-black">
											정말 대단하시군요!👏
										</Badge>
										<Badge bgColor="lightblue" className="text-black">
											정말 대단하시군요!👏
										</Badge>
									</div>
								</div>
							</Card>
						))}
				</div>
			</ContentSection>
			<ContentSection title="포기한 목표">
				<div className="flex flex-wrap gap-[20px]">
					{abandonedGoals &&
						abandonedGoals?.map((goal) => (
							<Card
								key={goal.id}
								className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative border-none ${statusColorClasses.GIVE_UP}`}
							>
								<Card.Header
									title={`목표금액: ${goal.goalAmount}원`}
									className="p-0"
								/>
								<Card.Content className="p-0 flex flex-col gap-[10px]">
									<p>
										{calculateDaysLeft(goal.goalStartDate, goal.goalEndDate)}
									</p>

									<p>
										기간: {format(new Date(goal.goalStartDate), "yyyy-MM-dd")} ~{" "}
										{format(new Date(goal.goalEndDate), "yyyy-MM-dd")}
									</p>
								</Card.Content>
								<Card className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none">
									<div />
								</Card>
								<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
									<div className="">
										<Image
											src="/images/character05.png"
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover  rounded-md w-[100%] "
										/>
									</div>
									<div>
										<Badge bgColor="red" className="text-white">
											다시 도전해보세요!😅
										</Badge>
									</div>
								</div>
							</Card>
						))}
				</div>
			</ContentSection>
			<ContentSection title="실패한 목표">
				<div className="flex flex-wrap gap-[20px]">
					{failedGoals &&
						failedGoals?.map((goal) => (
							<Card
								key={goal.id}
								className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative border-none ${statusColorClasses.GIVE_UP}`}
							>
								<Card.Header
									title={`목표금액: ${goal.goalAmount}원`}
									className="p-0"
								/>
								<Card.Content className="p-0 flex flex-col gap-[10px]">
									<p>
										{calculateDaysLeft(goal.goalStartDate, goal.goalEndDate)}
									</p>

									<p>
										기간: {format(new Date(goal.goalStartDate), "yyyy-MM-dd")} ~{" "}
										{format(new Date(goal.goalEndDate), "yyyy-MM-dd")}
									</p>
								</Card.Content>
								<Card className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none">
									<div />
								</Card>
								<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
									<div className="">
										<Image
											src="/images/character05.png"
											alt=""
											width={0}
											height={0}
											sizes="100vw"
											className="relative object-cover  rounded-md w-[100%] "
										/>
									</div>
									<div>
										<Badge bgColor="lightblue" className="text-black">
											다시 도전해보세요!😅
										</Badge>
									</div>
								</div>
							</Card>
						))}
				</div>
			</ContentSection>
		</div>
	);
};

export default Naegong;
