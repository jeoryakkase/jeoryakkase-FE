import Image from "next/image";

import Card from "@components/Card";
import ProgressBarChart from "@components/ProgressBar";
import { Badge } from "@components/shadcn/ui/Badge";

import progressBarData from "../../assets/progressBarData";

const tagMessage = (percentage: number): [string, string] => {
	if (percentage < 50) return ["노력부족", "조금 더 노력해볼까요?💪"];
	return ["순항 중", "잘하고 있어요♥️"];
};

type BadgeColor =
	| "lightred"
	| "yellow"
	| "lightyellow"
	| "lightblue"
	| "midblue"
	| "darkblue"
	| null
	| undefined;

const getBadgeColor = (percentage: number): BadgeColor => {
	return percentage < 50 ? "lightred" : "yellow";
};

interface GoalCardProps {
	img: string;
	percentage: number;
	title: string;
	leftMoney: number;
	dayCount: number;
	leftDay: number;
	className?: string;
}

const GoalCard = ({
	percentage,
	title,
	img,
	leftMoney,
	dayCount,
	leftDay,
	className,
}: GoalCardProps) => {
	const messages: [string, string] = tagMessage(percentage);
	const badgeColor = getBadgeColor(percentage);

	return (
		<div>
			{/* data가 적정 달성률 미만이면 노력부족, 조금 더 아껴볼까요? // data가 //
			적정 달성률 이상이면 순항 중, 잘하고 있어요? */}
			<div className={`flex space-x-2 ${className}`}>
				<Badge variant="default" bgColor={badgeColor}>
					{" "}
					{messages[0]}{" "}
				</Badge>
				<Badge variant="default" bgColor={badgeColor}>
					{" "}
					{messages[1]}
				</Badge>
			</div>
			<Card highlight={false} className="flex-grow">
				<Image src={img} alt="목표 이미지" width={150} height={150} />
				<Card.Header title={title} />
				<Card.Content>
					<div>{percentage}</div>
					<ProgressBarChart data={progressBarData(percentage)} />

					<div>
						<div>앞으로 {leftMoney}만원</div>
						<div>{dayCount}일째 진행 중</div>
						<div>D-{leftDay}</div>
					</div>
				</Card.Content>
			</Card>
		</div>
	);
};

export default GoalCard;
