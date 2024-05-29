import Image from "next/image";

import BronzeIcon from "@assets/images/iconImage/bronze.png";
import ClapIcon from "@assets/images/iconImage/clap.png";
import GoldIcon from "@assets/images/iconImage/gold.png";
import SilverIcon from "@assets/images/iconImage/sliver.png";
import UserProfileBox from "@components/UserProfileBox";

import Card from "../Card/index";
import { Badge } from "../shadcn/ui/Badge/index";

interface ZarangCardProps {
	id: number;
	nickName: string;
	className?: string;
	zarangContent: [string, number];
	cheers: number;
	comment: string;
	profileImage: string;
}

const iconMap = [GoldIcon, SilverIcon, BronzeIcon];
const highlightMap = ["yellow", "gray", "bronze"];

const ZarangCard = ({
	id,
	nickName,
	zarangContent,
	cheers,
	className,
	profileImage,
	comment,
}: ZarangCardProps) => {
	const icon = iconMap[id - 1];
	const highlight = highlightMap[id - 1];

	return (
		<Card
			highlight={highlight}
			className={`flex flex-col items-center ${className}`}
		>
			<div className="flex flex-row justify-center items-start p-2">
				<Image src={icon} alt={`아이콘 ${id}`} width={30} height={30} />
				<div className="flex flex-col">
					<Card.Content>
						<UserProfileBox nickname={nickName} profileImg={profileImage} />
						<div className="flex flex-col items-start space-y-2">
							<Badge variant="default" bgColor="lightblue">
								{zarangContent[0]}
							</Badge>
							<div>{comment}</div>
							<div>총 절약 금액 {zarangContent[1]} 원</div>
						</div>
					</Card.Content>
				</div>
			</div>

			<Card.Footer>
				<div className="flex items-center">
					<Image src={ClapIcon} alt="박수 이모티콘" className="mr-2" />
					{cheers}이 박수를 쳤습니다
				</div>
			</Card.Footer>
		</Card>
	);
};

export default ZarangCard;
