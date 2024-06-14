import Image from "next/image";
import { SlOptionsVertical } from "react-icons/sl";

import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import ProgressBarChart from "@components/ProgressBar";
import { formatGoalAmount } from "@containers/naegong/asset/cardCalculate";
import statusColorClasses from "@containers/naegong/asset/statusColorClasses";
import goalsQueryOption from "@services/user/goals";
import { useQuery } from "@tanstack/react-query";

import { progressGoalData } from "../assets/progressGoalData";

type Params = {
	goalId: string;
};
const UserInfoGoal = () => {
	const statusColorClasses = {
		"진행중인 목표": "bg-main-lightyellow",
		"완료된 목표": "bg-main-darkblue",
		"포기한 목표": "bg-point-lightred",
	};
	const inProgressGoals = goalData.filter(
		(goal) => goal.status === "진행중인 목표",
	);
	const completedGoals = goalData.filter(
		(goal) => goal.status === "완료된 목표",
	);
	const abandonedGoals = goalData.filter(
		(goal) => goal.status === "포기한 목표",
	);
	const item = [
		{ id: 1, label: "포기하기" },
		{ id: 2, label: "공유하기" },
	];
	return (
		<div>
			<ContentSection title="진행중인 목표">
				<div className="flex flex-wrap gap-[20px]">
					{goalData?.map((goal) => (
						<Card
							key={goal.id}
							className={`flex flex-col gap-[10px] p-[20px] w-[300px] relative ${statusColorClasses.PROCEEDING}`}
						>
							<Card.Header
								title={`목표금액 : ${formatGoalAmount(goal.goalAmount)}원`}
								className="p-0"
							/>
							<Button
								variant="ghost"
								bgColor="transparent"
								shadow="transparent"
							>
								<FaTrash />
							</Button>

							<Card.Content className="p-0 flex flex-col gap-[10px]">
								<p>한달</p>
								<div className=" w-[250px] h-[20px]">
									<ProgressBarChart data={progressGoalData} />
								</div>
								<p>
									기간: {goal.startDate} ~ {goal.endDate}
								</p>
							</Card.Content>
						</Card>
					))}
				</div>
			</ContentSection>
		</div>
	);
};

export default UserInfoGoal;
