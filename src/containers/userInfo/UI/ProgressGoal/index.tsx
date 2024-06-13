"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CenterCharacter from "@assets/images/character/character01.png";
import LeftCharacter from "@assets/images/character/character06.png";
import Coin from "@assets/images/iconImage/coin.png";
import ArrowCoin from "@assets/images/iconImage/coin02.png";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import ProgressBarChart from "@components/ProgressBar";
import {
	calculateDaysLeft,
	formatGoalAmount,
} from "@containers/naegong/asset/cardCalculate";
import formatDate from "@containers/userInfo/assets/formatDate";
import { progressGoalData } from "@containers/userInfo/assets/progressGoalData";
import { Goals } from "@containers/userInfo/types";

interface ProgressGoalProps {
	goals: Goals;
}

const ProgressGoal = ({ goals }: ProgressGoalProps) => {
	const router = useRouter();
	return (
		<ContentSection title="진행중인 목표" childrenClassName="">
			<Swiper
				className="h-full w-[1400px]"
				spaceBetween={50}
				slidesPerView={1}
				centeredSlides
				loop
				navigation
				modules={[Pagination, Navigation]}
			>
				{goals?.content.map((goal) => (
					<SwiperSlide
						key={goal.id}
						className="flex flex-col gap-[40px] cursor-pointer"
						onClick={() => router.push(`/userinfo/${goal.id}`)}
					>
						<Card className="">
							<Card.Content className="flex flex-row p-[30px] justify-between">
								<div className="w-[100px]  relative">
									<Image
										src={goal.goalImage}
										alt="ProgressGoal"
										width={0}
										height={0}
										sizes="100vw"
										className="static w-[100%] object-cover"
									/>
								</div>
								<div>
									<div className="text-center">
										{`목표금액 : ${formatGoalAmount(goal.goalAmount)}원`}
									</div>
									<div className=" w-[700px]">
										<ProgressBarChart
											data={progressGoalData(
												goal.currentAmount,
												goal.goalAmount,
											)}
										/>
									</div>
								</div>
								<Image
									src={Coin}
									width={0}
									height={0}
									sizes="100vw"
									className="static w-[100px] h-[100px] object-cover"
									alt="ProgressGoal"
								/>
							</Card.Content>
						</Card>
						<div className="flex h-[160px] gap-[20px] mt-[40px]">
							<Card className=" bg-main-lightyellow border-transparent overflow-hidden flex-row justify-between items-center border-none w-[33.3%]">
								<div className="w-[300px] h-[300px] relative mt-[100px]">
									<Image
										src={LeftCharacter}
										alt="ProgressGoal"
										width={0}
										height={0}
										sizes="100vw"
										className="static w-[100%] object-cover"
									/>
								</div>
								<Card.Content className="p-0 ">
									<div className="text-[#FF0000] tracking-[5px]">
										{calculateDaysLeft(goal.goalStartDate, goal.goalEndDate)}
									</div>
								</Card.Content>
							</Card>
							<Card className=" bg-main-yellow border-transparent border-none overflow-hidden block text-center w-[33.3%]">
								<Card.Content className="p-0 m-0">
									<div>
										{formatDate(goal.goalStartDate)} ~
										{formatDate(goal.goalEndDate)}
									</div>
								</Card.Content>
								<div className="w-[180px] h-[180px] relative m-auto">
									<Image
										src={CenterCharacter}
										alt="ProgressGoal"
										width={0}
										height={0}
										sizes="100vw"
										className="static w-[100%] object-cover"
									/>
								</div>
							</Card>
							<Card className=" bg-main-navy border-transparent  flex-row justify-between items-center border-none w-[33.3%]">
								<Card.Content>
									<div className="text-white">
										{`절약한 금액 : ${formatGoalAmount(goal.currentAmount)}원`}
									</div>
								</Card.Content>
								<div className="w-[75px] h-[90px] relative ">
									<Image
										src={ArrowCoin}
										alt="ProgressGoal"
										width={0}
										height={0}
										sizes="100vw"
										className="static w-[100%] object-cover"
									/>
								</div>
							</Card>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</ContentSection>
	);
};

export default ProgressGoal;
