import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";

import Card from "@components/Card";
import { Badge } from "@components/shadcn/ui/Badge";
import Progress from "@components/shadcn/ui/Progress";

const tagMessage = (percentage: number): [string, string] => {
	if (percentage < 50) return ["노력부족", "조금 더 노력해볼까요?💪"];
	if (percentage >= 50 && percentage < 90)
		return ["순항 중", "잘하고 있어요♥️"];
	return ["거의 다 왔어요", "대단해요!"];
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
	if (percentage < 50) return "lightred";
	if (percentage >= 50 && percentage < 90) return "yellow";
	return "lightblue";
};

const getIndicatorClassName = (percentage: number): string => {
	if (percentage < 50) return "bg-point-red";
	if (percentage >= 50 && percentage < 90) return "bg-main-yellow";
	return "bg-main-lightblue";
};

interface GoalCardProps {
	img: string | StaticImageData;
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
	const [progress, setProgress] = useState(0);
	const messages: [string, string] = tagMessage(percentage);
	const badgeColor = getBadgeColor(percentage);
	const indicatorClassName = getIndicatorClassName(percentage);

	useEffect(() => {
		const increment = percentage / 200;
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= percentage) {
					clearInterval(interval);
					return percentage;
				}
				return prevProgress + increment;
			});
		}, 1);

		return () => clearInterval(interval);
	}, [percentage]);

	return (
		<div className={`${className}`}>
			{/* data가 적정 달성률 미만이면 노력부족, 조금 더 아껴볼까요? // data가 //
			적정 달성률 이상이면 순항 중, 잘하고 있어요? */}
			<div className="flex space-x-2 bg-main mb-3 mt-3">
				<Badge variant="default" bgColor={badgeColor}>
					{" "}
					{messages[0]}{" "}
				</Badge>
				<Badge variant="default" bgColor={badgeColor}>
					{" "}
					{messages[1]}
				</Badge>
			</div>
			<Card highlight="" className="flex flex-row w-full">
				<Image
					src={img}
					alt="목표 이미지"
					width={150}
					height={150}
					className="rounded-2xl"
				/>
				<div className="flex flex-col w-full">
					<Card.Header title={title} className="flex p-0" />
					<Card.Content className="w-full flex flex-col mt-2">
						<div className="text-end text-s">{percentage}%</div>
						<Progress
							value={progress}
							indicatorClassName={indicatorClassName}
						/>
						<div className="flex flex-row mt-6 justify-between">
							<div className="mr-3">앞으로 {leftMoney}만원</div>
							<div className="mr-3">{dayCount}일째 진행 중</div>
							<div>D-{leftDay}</div>
						</div>
					</Card.Content>
				</div>
			</Card>
		</div>
	);
};

export default GoalCard;
