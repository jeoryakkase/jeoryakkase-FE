import Image from "next/image";

import Card from "../Card/index";
import { Badge } from "../shadcn/ui/Badge/index";

type TagImgType = {
	id: string;
	img: string;
}[];
interface TagCardProps {
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	imgs?: TagImgType;
	today: boolean;
	dueDate: boolean;
	className?: string;
	countDay?: number;
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
	imgs,
	startDate,
	endDate,
	today,
	dueDate,
	countDay,
	className,
}: TagCardProps) => {
	const backgroundColor = getBackgroundColor(today, dueDate);
	const badgeColor = getBadgeColor(today, dueDate);
	const messages = getMessages(today, dueDate);

	return (
		<Card highlight="" className={` ${backgroundColor} ${className}`}>
			<div className="flex flex-col justify-center items-center p-2">
				<div className="flex flex-col items-start">
					<div className="flex justify-between items-center">
						<Card.Header title={title} />
						{countDay && <div>D +{countDay}</div>}
					</div>
					<Card.Content>{description}</Card.Content>
				</div>
				<div className="flex flex-wrap justify-center items-center space-x-2 mb-4">
					{imgs?.map((img) => (
						<div key={img.id} className="flex-shrink-0">
							<Image
								src={img.img}
								alt={title}
								width={70}
								height={70}
								className="rounded"
							/>
						</div>
					))}
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
