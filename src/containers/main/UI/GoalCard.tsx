import Card from "@components/Card";
import { Badge } from "@components/shadcn/ui/Badge";

const GoalCard = () => {
	return (
		<div>
			{/* data가 적정 달성률 미만이면 노력부족, 조금 더 아껴볼까요? // data가 //
			적정 달성률 이상이면 순항 중, 잘하고 있어요? */}
			<div className="flex space-x-2">
				<Badge variant="default" bgColor="lightred">
					{" "}
					노력부족{" "}
				</Badge>
				<Badge variant="default" bgColor="lightred">
					{" "}
					조금 더 노력해볼까요?{" "}
				</Badge>
			</div>
			<Card highlight={true} className="flex-grow">
				<Card.Header title="오늘 날짜"></Card.Header>
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</div>
	);
};

export default GoalCard;
