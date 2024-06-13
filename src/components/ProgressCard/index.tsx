import dynamic from "next/dynamic";
import Image from "next/image";

import Card from "@components/Card";
import progressBarData from "@containers/main/assets/progressBarData";

const ProgressBarChart = dynamic(() => import("@components/ProgressBar"), {
	ssr: false,
});

interface ProgressCardProps {
	img?: string;
	title: string;
	percentage: number;
	leftDay: number;
	dayCount?: number;
	leftMoney?: number;
	progressDay?: number;
}

const ProgressCard = ({
	img,
	title,
	percentage,
	leftDay,
	dayCount,
	leftMoney,
	progressDay,
}: ProgressCardProps) => {
	return (
		<Card highlight="" className="flex-grow">
			{img && <Image src={img} alt="목표 이미지" width={150} height={150} />}
			<Card.Header title={title} />
			<Card.Content>
				<div>{percentage}</div>
				<ProgressBarChart data={progressBarData(percentage)} />

				<div>
					{leftMoney && <div>앞으로 {leftMoney}만원</div>}
					{leftDay > 0 && progressDay && (
						<div> 오늘까지 {progressDay} 인증완료 </div>
					)}
					{leftDay === 0 && progressDay && (
						<div> 대단해요 {progressDay} 인증완료 </div>
					)}
					<div>{dayCount}일째 진행 중</div>
					<div>D-{leftDay}</div>
				</div>
			</Card.Content>
		</Card>
	);
};

export default ProgressCard;
