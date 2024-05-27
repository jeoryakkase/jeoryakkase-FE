import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import DoughnutChart from "@components/DoughnutChart";
import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import doughtnutData from "@containers/main/assets/doughtnutData";
import { getFullDate, getLastMonth } from "@utils/dates.utils";

const BlankHistory = () => {
	const todayDate = getFullDate(new Date());
	const lastMonth = getLastMonth(new Date());

	return (
		<ContentSection
			title="소금기 히스토리"
			childrenClassName="flex flex-row justify-center space-x-10"
		>
			<Card
				highlight={true}
				className="w-[400px] bg-main-lightyellow border-transparent"
			>
				<Card.Header title={todayDate} />
				<Card.Content>
					<Flex direction="column" align="center">
						<span>
							{" "}
							서비스에 가입하시고 당신의 짠맛 히스토리를 기록해보세요
						</span>
						<div className="mt-5 text-base">
							{" "}
							현재{" "}
							<Badge bgColor="yellow" size="m">
								배달비
							</Badge>{" "}
							<Badge bgColor="yellow" size="m">
								커피값
							</Badge>
							으로 <span className="text-lg font-semibold">12,400원</span>{" "}
							절약했습니다.
						</div>
					</Flex>
				</Card.Content>
			</Card>
			<Card
				highlight={true}
				className="w-[400px]  bg-main-lightyellow  border-transparent"
			>
				<Card.Header title={lastMonth} />
				<Card.Content>
					<Flex direction="row">
						<div className="w-[250px]">
							<DoughnutChart data={doughtnutData} />
						</div>
						<Flex direction="column">
							<div className="mb-2">지난 한달 총 224,300원 절약</div>
							<Badge bgColor="yellow" className="mb-2">
								{" "}
								대중교통 이용
							</Badge>
							<Badge bgColor="yellow" className="mb-2">
								도시락 싸가기
							</Badge>
							<Badge bgColor="yellow">카페 출입 금지</Badge>
						</Flex>
					</Flex>
				</Card.Content>
			</Card>
			<Card
				highlight={true}
				className="w-[100px]  bg-main-lightyellow  border-transparent"
			>
				<Card.Content>
					<Flex direction="column" align="center">
						<img alt="이모티콘" src="/images/logo.png" />
						<span>로그인하고 저략카세로 절약을 시작해보세요! </span>
						<Button className="mt-3">로그인</Button>
					</Flex>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default BlankHistory;
