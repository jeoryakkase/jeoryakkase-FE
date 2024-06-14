import Image from "next/image";

import mainCharacter from "@assets/images/character/character04.png";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import DoughnutChart from "@components/DoughnutChart";
import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import doughtnutData from "@containers/main/assets/doughtnutData";
import { getFullDate, getLastMonth } from "@utils/dates.utils";

const Statistics = ({ userStatistics }) => {
	if (!userStatistics) {
		return null;
	}

	const { todayDate, yearMonth, totalSavings } = userStatistics;
	const formattedTodayDate = getFullDate(new Date());
	const formattedLastMonth = getLastMonth(new Date());
	const labels = userStatistics.monthlyCertificationPercentages
		? Object.keys(userStatistics.monthlyCertificationPercentages)
		: [];
	const percentages = userStatistics.monthlyCertificationPercentages
		? Object.values(userStatistics.monthlyCertificationPercentages)
		: [];
	const doughnutChartData = doughtnutData({ percentage: percentages, labels });

	return (
		<ContentSection
			title="소금기 히스토리"
			childrenClassName="flex flex-row justify-center space-x-10"
		>
			<Card
				highlight=""
				className="flex-grow w-[400px] items-center bg-main-lightyellow border-transparent"
			>
				<Card.Header title={formattedTodayDate} className="mt-6" />
				<Card.Content className="flex h-full items-center justify-center">
					<Flex direction="row" align="center" justify="center">
						<div className="text-base">
							{" "}
							현재{" "}
							{todayDate.badges.map((badge) => (
								<Badge key={badge} bgColor="yellow" size="m" className="mx-1">
									{badge}
								</Badge>
							))}
							으로{" "}
							<span className="text-lg font-semibold">
								{todayDate.savings.toLocaleString()}원
							</span>{" "}
							절약했습니다.
						</div>
					</Flex>
				</Card.Content>
			</Card>
			<Card
				highlight=""
				className=" flex-grow w-[400px]  bg-main-lightyellow  border-transparent"
			>
				<Card.Header title={formattedLastMonth} className="mt-6 mb-3" />
				<Card.Content>
					<Flex direction="row">
						<div className="w-[250px]">
							<DoughnutChart data={doughnutChartData} />
						</div>
						<Flex direction="column">
							<div className="mb-2">
								지난 한달 총 {yearMonth.totalSavings.toLocaleString()}원 절약
							</div>
							{yearMonth.badges.map((badge) => (
								<Badge
									key={badge}
									bgColor="yellow"
									className="mb-2 text-sm font-semibold"
								>
									{badge}
								</Badge>
							))}
						</Flex>
					</Flex>
				</Card.Content>
			</Card>
			<Card
				highlight=""
				className="flex flex-grow w-[100px]  bg-main-lightyellow  border-transparent p-2"
			>
				<Card.Content className="w-full flex justify-center items-center mt-8">
					<Flex
						direction="column"
						align="center"
						justify="center"
						className="w-full"
					>
						<Image
							alt="이모티콘"
							src={mainCharacter}
							width={100}
							height={100}
						/>
						<span className="w-full text-sm text-center mt-2">
							{" "}
							저략카세로 절약한 금액{" "}
						</span>
						<span className="mt-4 font-semibold">
							총 {totalSavings.toLocaleString()} 원{" "}
						</span>
					</Flex>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default Statistics;
