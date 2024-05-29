import Card from "../Card/index";
import { Badge } from "../shadcn/ui/Badge/index";

interface TagCardProps {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	today: boolean;
	dueDate: boolean;
	className?: string;
}

const getBackgroundColor = (today: boolean, dueDate: boolean) => {
	if (!today) return "bg-point-lightred"; // 오늘 인증을 하지 않았을 경우
	if (dueDate) return "bg-main-lightblue"; // DueDate가 true일 경우
	return "bg-main-lightyellow"; // 그 외의 경우
};

const getBadgeColor = (today: boolean, dueDate: boolean) => {
	if (!today) return "red";
	if (dueDate) return "midblue";
	return "yellow";
};

const getMessages = (today: boolean, dueDate: boolean): [string, string] => {
	if (!today) {
		return ["포기하지 마세요", "오늘 인증을 진행해주세요!"];
	}
	if (dueDate) {
		return ["내일이면 완주", "오늘 인증을 완료했습니다"];
	}
	return ["잘하고 있어요!", "오늘 인증을 완료했습니다"];
};

const TagCard = ({
	title,
	description,
	startDate,
	endDate,
	today,
	dueDate,
	className,
}: TagCardProps) => {
	const backgroundColor = getBackgroundColor(today, dueDate);
	const badgeColor = getBadgeColor(today, dueDate);
	const messages = getMessages(today, dueDate);

	return (
		<Card highlight="" className={` ${backgroundColor} ${className}`}>
			<div className="flex flex-col justify-center items-center p-2">
				<div className="flex flex-col">
					<Card.Header title={title} />
					<Card.Content>{description}</Card.Content>
				</div>
				<div className="flex flex-col items-start space-y-2">
					<Badge variant="default" bgColor={badgeColor}>
						{messages[0]}
					</Badge>
					<Badge variant="default" bgColor={badgeColor}>
						{messages[1]}
					</Badge>
				</div>
				<Card.Footer>
					<span>{startDate}</span> - <span>{endDate}</span>
				</Card.Footer>
			</div>
		</Card>
	);
};

export default TagCard;
