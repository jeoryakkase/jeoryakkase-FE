import Image from "next/image";
import Link from "next/link";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import ProgressBarChart from "@components/ProgressBar";
import {
	goalData,
	progressGoalData,
} from "@containers/userInfo/assets/progressGoalData";

const ProgressGoal = () => {
	return (
		<ContentSection
			title="진행중인 목표"
			childrenClassName="flex-col gap-[20px]"
		>
			<Link href="/userinfo/goal" className="self-end">
				더 보기
			</Link>

			<Card highlight={false} className="">
				<Card.Content className="flex flex-row p-[40px] justify-between">
					<div className="w-[100px]  relative">
						<Image
							src={goalData[0].image}
							alt="ProgressGoal"
							width={0}
							height={0}
							sizes="100vw"
							className="static w-[100%] object-cover"
						/>
					</div>
					<div>
						<div className="text-center">
							목표금액 : {goalData[0].goalAmount}
						</div>
						<div className=" w-[700px]">
							<ProgressBarChart data={progressGoalData} />
						</div>
					</div>
					<Image
						src="/images/coin.png"
						width={0}
						height={0}
						sizes="100vw"
						className="static w-[100%] object-cover"
						alt="ProgressGoal"
					/>
				</Card.Content>
			</Card>
			<div className="flex h-[160px] gap-[20px]">
				<Card
					highlight={false}
					className=" bg-main-lightyellow border-transparent overflow-hidden flex-row justify-between items-center border-none w-[33.3%]"
				>
					<div className="w-[300px] h-[300px] relative mt-[100px]">
						<Image
							src="/images/character06.png"
							alt="ProgressGoal"
							width={0}
							height={0}
							sizes="100vw"
							className="static w-[100%] object-cover"
						/>
					</div>
					<Card.Content>
						<div className="text-[#FF0000]">D - 10</div>
					</Card.Content>
				</Card>
				<Card
					highlight={false}
					className=" bg-main-yellow border-transparent border-none overflow-hidden block text-center w-[33.3%]"
				>
					<Card.Content className="p-0 m-0">
						<div>
							{goalData[0].startDate} ~ {goalData[0].endDate}
						</div>
					</Card.Content>
					<div className="w-[180px] h-[180px] relative m-auto">
						<Image
							src="/images/character01.png"
							alt="ProgressGoal"
							width={0}
							height={0}
							sizes="100vw"
							className="static w-[100%] object-cover"
						/>
					</div>
				</Card>
				<Card
					highlight={false}
					className=" bg-main-navy border-transparent  flex-row justify-between items-center border-none w-[33.3%]"
				>
					<Card.Content>
						<div className="text-white">
							남은 금액 : {goalData[0].remainingAmount}
						</div>
					</Card.Content>
					<div className="w-[75px] h-[90px] relative ">
						<Image
							src="/images/coin02.png"
							alt="ProgressGoal"
							width={0}
							height={0}
							sizes="100vw"
							className="static w-[100%] object-cover"
						/>
					</div>
				</Card>
			</div>
		</ContentSection>
	);
};

export default ProgressGoal;
