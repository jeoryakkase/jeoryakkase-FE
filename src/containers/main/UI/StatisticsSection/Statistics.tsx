import Image from "next/image";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import DoughnutChart from "@components/DoughnutChart";
import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import doughtnutData from "@containers/main/assets/doughtnutData";

const Statistics = ({ userStatistics }) => {
	const { todayDate, lastMonth, logo } = userStatistics;

	return (
		<ContentSection
			title="소금기 히스토리"
			childrenClassName="flex flex-row justify-center space-x-10"
		>
			<Card
				highlight
				className="flex-grow w-[400px] bg-main-lightyellow border-transparent"
			>
				<Card.Header title={todayDate.date} />
				<Card.Content>
					<Flex direction="column" align="center">
						<span>
							{" "}
							서비스에 가입하시고 당신의 짠맛 히스토리를 기록해보세요
						</span>
						<div className="mt-5 text-base">
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
				highlight
				className=" flex-grow w-[400px]  bg-main-lightyellow  border-transparent"
			>
				<Card.Header title={lastMonth.date} />
				<Card.Content>
					<Flex direction="row">
						<div className="w-[250px]">
							<DoughnutChart data={doughtnutData} />
						</div>
						<Flex direction="column">
							<div className="mb-2">
								지난 한달 총 {lastMonth.totalSavings.toLocaleString()}원 절약
							</div>
							{lastMonth.badges.map((badge) => (
								<Badge key={badge} bgColor="yellow" className="mb-2">
									{badge}
								</Badge>
							))}
						</Flex>
					</Flex>
				</Card.Content>
			</Card>
			<Card
				highlight
				className="flex-grow w-[100px]  bg-main-lightyellow  border-transparent"
			>
				<Card.Content>
					<Flex direction="column" align="center">
						<Image alt="이모티콘" src={logo.src} />
						<span> 저략카세로 절약한 금액 </span>
						<span>총 {logo.message} 원 </span>
					</Flex>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default Statistics;
