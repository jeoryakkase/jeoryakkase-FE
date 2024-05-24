import Card from "@components/Card";
import { Badge } from "@components/shadcn/ui/Badge";
import progressBarData from "../assets/progressBarData";
import ProgressBarChart from "@components/ProgressBar";

const tagMessage = (percentage: number): [string, string] => {
	if (percentage < 50) return ["노력부족", "조금 더 노력해볼까요?💪"];
	return ["순항 중", "잘하고 있어요♥️"];
};

interface GoalCardProps {
	percentage: number;
	title: string;
}

const GoalCard = ({ percentage, title, ...props }: GoalCardProps) => {
	const messages: [string, string] = tagMessage(percentage);

	return (
		<div>
			{/* data가 적정 달성률 미만이면 노력부족, 조금 더 아껴볼까요? // data가 //
			적정 달성률 이상이면 순항 중, 잘하고 있어요? */}
			<div className="flex space-x-2">
				<Badge variant="default" bgColor="lightred">
					{" "}
					{messages[0]}{" "}
				</Badge>
				<Badge variant="default" bgColor="lightred">
					{" "}
					{messages[1]}
				</Badge>
			</div>
			<Card highlight={true} className="flex-grow">
				<Card.Header title={title} />
				<ProgressBarChart data={progressBarData} />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</div>
	);
};

export default GoalCard;
