import Flex from "@components/Flex";
import { Badge } from "@components/shadcn/ui/Badge";
import UserProfileBox from "@components/UserProfileBox";

import ContentToolTip from "./ContentToolTip";

interface BadgeProps {
	stroke?: string;
	fill?: string;
	className?: string;
	contentType: "image" | "text";
	content: string;
	alt?: string;
}

interface ProfileBoxProps {
	profileImg: string;
	nickname: string;
	date: string;
	isOwner: boolean;
	isChallenge: boolean;
	badge?: BadgeProps;
	writeHour?: string;
	progressDate?: string;
	title: string;
	img?: string;
}

const ProfileBox = ({
	profileImg,
	nickname,
	badge,
	writeHour,
	date,
	progressDate,
	isOwner,
	isChallenge,
	title,
	img,
}: ProfileBoxProps) => {
	return (
		<section className="flex flex-row w-full items-center justify-between mb-16">
			<Flex direction="column">
				<UserProfileBox
					profileImg={profileImg}
					nickname={nickname}
					badge={badge}
				/>
				<div className="flex flex-col ml-24">
					<div className="flex mb-3 text-sub-gray4">
						{writeHour && <div className="ml-5">{writeHour}시간 전 작성</div>}
						{/* date는 날짜 변환하는 함수 넣어줘야지뭐 */}
						{writeHour! && date && <div className="ml-5"> {date} </div>}
					</div>
					{progressDate && (
						<Badge
							variant="shadow"
							bgColor="lightyellow"
							size="m"
							className="text-center w-20 ml-4"
						>
							{progressDate}일째
						</Badge>
					)}
				</div>
			</Flex>
			<ContentToolTip
				isOwner={isOwner}
				isChallenge={isChallenge}
				title={title}
				img={img}
			/>
		</section>
	);
};

export default ProfileBox;
