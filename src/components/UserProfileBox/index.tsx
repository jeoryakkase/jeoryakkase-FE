import Image from "next/image";

import character from "@assets/images/character/character01.png";
import SuccessBadge from "@components/SuccessBadge";

interface UserProfileBoxProps {
	profileImg?: string;
	nickname: string;
	badge?: {
		stroke?: string;
		fill?: string;
		className?: string;
		contentType: "image" | "text";
		content: string;
		alt?: string;
	};
}

const UserProfileBox = ({
	profileImg,
	nickname,
	badge,
}: UserProfileBoxProps) => {
	return (
		<div className="flex items-center space-x-4 p-2">
			<div className="relative w-10 h-10">
				<Image
					src={profileImg || character}
					alt={`${nickname} 유저의 프로필 이미지`}
					width={0}
					height={0}
					sizes="100vw"
					className="rounded-full w-[100%] object-cover"
				/>
			</div>
			{badge && (
				<SuccessBadge
					stroke={badge.stroke}
					fill={badge.fill}
					className="w-8 h-8"
					contentType={badge.contentType}
					content={badge.content}
					alt={badge.alt}
				/>
			)}
			<div className="flex flex-col">
				<span className="font-semibold text-lg">{nickname}</span>
			</div>
		</div>
	);
};

export default UserProfileBox;
