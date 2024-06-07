import Image from "next/image";

import {
	getBackgroundColor,
	getBadgeColor,
	getMessages,
} from "./utils/tagcard.utils";
import Card from "../Card/index";
import { Badge } from "../shadcn/ui/Badge/index";

type TagImgType = {
	id: string;
	img: string;
}[];
interface TagCardProps {
	title: string;
	description: string;
	startDate?: string;
	endDate?: string;
	imgs?: TagImgType;
	today?: boolean;
	dueDate?: boolean;
	className?: string;
	countDay?: number;
	tagMessage?: string[];
}

const TagCard = ({
	title,
	description,
	imgs,
	startDate,
	endDate,
	today,
	dueDate,
	countDay,
	tagMessage,
	className,
}: TagCardProps) => {
	const backgroundColor =
		today !== undefined && dueDate !== undefined
			? getBackgroundColor(today, dueDate)
			: "";
	const badgeColor =
		today !== undefined && dueDate !== undefined
			? getBadgeColor(today, dueDate)
			: "yellow";
	const messages =
		today !== undefined && dueDate !== undefined
			? getMessages(today, dueDate)
			: undefined;

	return (
		<Card highlight="" className={` ${backgroundColor} ${className}`}>
			<div className="flex flex-col justify-center items-center p-2">
				<div className="flex flex-col items-center">
					<div className="flex justify-between items-center mb-2">
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
					{today !== undefined
						? messages && (
								<>
									<Badge variant="default" bgColor={badgeColor}>
										{messages[0]}
									</Badge>
									<Badge variant="default" bgColor={badgeColor}>
										{messages[1]}
									</Badge>
								</>
							)
						: tagMessage &&
							tagMessage.map((msg, index) => (
								// eslint-disable-next-line react/no-array-index-key
								<Badge key={index} variant="default" bgColor="yellow">
									{msg}
								</Badge>
							))}
				</div>
				<Card.Footer>
					{startDate && endDate && (
						<div className="font-semibold mt-3">
							<span>{startDate}</span> - <span>{endDate}</span>
						</div>
					)}
				</Card.Footer>
			</div>
		</Card>
	);
};

export default TagCard;
