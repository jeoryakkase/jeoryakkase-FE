import Image from "next/image";
import { SlOptionsVertical } from "react-icons/sl";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import Modal from "@components/Modal";
import ProgressBarChart from "@components/ProgressBar";
import { Badge } from "@components/shadcn/ui/Badge";

import { goalData, progressGoalData } from "../assets/progressGoalData";
import DropdownMenuEdit from "../userInfoEdit/UI/DropDownEdit";

const userInfoChallengeHistory = () => {
	const statusColorClasses = {
		"진행중인 목표": "bg-main-lightyellow",
		"완료된 목표": "bg-main-darkblue",
	};
	const inProgressGoals = goalData.filter(
		(goal) => goal.status === "진행중인 목표",
	);
	const completedGoals = goalData.filter(
		(goal) => goal.status === "완료된 목표",
	);

	const item = [
		{ id: 1, label: "포기하기" },
		{ id: 2, label: "공유하기" },
	];
	return (
		<div>
			<ContentSection title="진행중인 챌린지">
				<div className="flex flex-wrap gap-[20px]">
					{inProgressGoals.map((goal) => (
						<Card
							key={goal.id}
							highlight={false}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative ${statusColorClasses["진행중인 목표"]}`}
						>
							<Card.Header
								title={`목표금액 : ${goal.goalAmount}원`}
								className="p-0"
							/>
							<DropdownMenuEdit
								trigger={<SlOptionsVertical />}
								menuItems={item}
								className="absolute top-[30px] right-[20px]"
								childrenClassName="bg-main-lightyellow "
							/>
							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>한달</p>
								<div className=" w-[250px] h-[20px]">
									<ProgressBarChart data={progressGoalData} />
								</div>
								<p>
									기간: {goal.startDate} ~ {goal.endDate}
								</p>

								<Modal
									triggerChildren={
										<Button variant="outline">Edit Profile</Button>
									}
									title="Edit profile"
									button="확인"
									closeButton="아니요"
								>
									내애애
								</Modal>
							</Card.Content>
						</Card>
					))}
				</div>
			</ContentSection>
			<ContentSection title="완료된 챌린지">
				<div className="flex flex-wrap gap-[20px]">
					{completedGoals.map((goal) => (
						<Card
							key={goal.id}
							highlight={false}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative border-none ${statusColorClasses["완료된 목표"]}`}
						>
							<Card.Header
								title={`목표금액: ${goal.goalAmount}원`}
								className="p-0"
							/>
							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>한달</p>
								<p>
									기간: {goal.startDate} ~ {goal.endDate}
								</p>
							</Card.Content>
							<Card
								highlight={false}
								className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none"
							>
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
										className="static w-[100%] object-cover"
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
		</div>
	);
};

export default userInfoChallengeHistory;
