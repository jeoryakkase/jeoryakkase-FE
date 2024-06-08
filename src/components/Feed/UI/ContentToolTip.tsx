import { useEffect } from "react";

import VerticalDot from "@assets/svgs/VerticalDot";
import {
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
} from "@components/shadcn/ui/DropdownMenu";
import { initializeKakao, shareKakao } from "@lib/kakaoShare";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

interface MenuItem {
	text: string;
	onMenuItemClick: () => void;
}

interface ContentToolTipProps {
	isOwner: boolean;
	isChallenge: boolean;
	title: string;
	img?: string;
}

const ContentToolTip = ({
	isOwner,
	isChallenge,
	title,
	img,
}: ContentToolTipProps) => {
	const menuItems: MenuItem[] = [];

	useEffect(() => {
		initializeKakao();
	}, []);

	const handleShare = (description: string) => {
		const shareUrl = typeof window !== "undefined" ? window.location.href : "";
		shareKakao(shareUrl, description, title, img);
	};

	if (isOwner) {
		if (isChallenge) {
			menuItems.push({
				text: "삭제",
				onMenuItemClick: () => console.log("챌린지 삭제 클릭"),
			});
			menuItems.push({
				text: "공유",
				onMenuItemClick: () => handleShare("오늘의 챌린지 공유"),
			});
		} else {
			menuItems.push({
				text: "수정",
				onMenuItemClick: () => console.log("염전 수정 클릭"),
			});
			menuItems.push({
				text: "삭제",
				onMenuItemClick: () => console.log("염전 삭제 클릭"),
			});
			menuItems.push({
				text: "공유",
				onMenuItemClick: () => handleShare("내 커뮤니티 글 공유"),
			});
		}
	} else {
		menuItems.push({
			text: "공유",
			onMenuItemClick: () => handleShare("소금쟁이들의 글 공유"),
		});
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<VerticalDot />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					{menuItems.map((item) => (
						<DropdownMenuItem key={item.text} onSelect={item.onMenuItemClick}>
							{item.text}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ContentToolTip;
