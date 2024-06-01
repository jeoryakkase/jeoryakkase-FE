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
}: ProfileBoxProps) => {
	return (
		<section>
			<UserProfileBox
				profileImg={profileImg}
				nickname={nickname}
				badge={badge}
			/>
			{writeHour && <div>{writeHour}시간 전 작성</div>}
			{/* date는 날짜 변환하는 함수 넣어줘야지뭐 */}
			{writeHour! && date && <div> {date} </div>}
			{progressDate && <Badge>{progressDate}일째</Badge>}
			<ContentToolTip isOwner={isOwner} isChallenge={isChallenge} />
		</section>
	);
};

export default ProfileBox;
