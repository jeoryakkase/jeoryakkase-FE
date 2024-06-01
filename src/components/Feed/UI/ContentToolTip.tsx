import VerticalDot from "@assets/svgs/VerticalDot";
import {
	DropdownMenuTrigger,
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
} from "@components/shadcn/ui/DropdownMenu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

interface MenuItem {
	text: string;
	onMenuItemClick: () => void;
}

interface ContentToolTipProps {
	isOwner: boolean;
	isChallenge: boolean;
}

const ContentToolTip = ({ isOwner, isChallenge }: ContentToolTipProps) => {
	const menuItems: MenuItem[] = [];

	if (isOwner) {
		if (isChallenge) {
			menuItems.push({
				text: "삭제",
				onMenuItemClick: () => console.log("챌린지 삭제 클릭"),
			});
			menuItems.push({
				text: "공유",
				onMenuItemClick: () => console.log("챌린지 공유 클릭"),
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
				onMenuItemClick: () => console.log("염전 공유 클릭"),
			});
		}
	} else {
		menuItems.push({
			text: "공유",
			onMenuItemClick: () => console.log("공유 클릭"),
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
