"use client";

import { useState } from "react";

import { Button } from "@components/shadcn/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/shadcn/ui/DropdownMenu";
import SuccessBadge from "@components/SuccessBadge";
import badgeData from "@components/SuccessBadge/BadgeData";

function DropDownBadge() {
	const [selectedBadgeId, setSelectedBadgeId] = useState<number | null>(null);
	const selectedBadge =
		badgeData.find((badge) => badge.id === selectedBadgeId) || badgeData[0];

	const handleBadgeSelect = (id: number) => {
		setSelectedBadgeId(id);
	};
	console.log(selectedBadge);
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="bg-none hover:bg-none w-[100%] h-[100%]"
				>
					{selectedBadge && (
						<SuccessBadge
							stroke={selectedBadge.stroke}
							fill={selectedBadge.fill}
							alt={selectedBadge.alt}
							contentType={selectedBadge.contentType as "text" | "image"}
							content={selectedBadge.content}
							className="w-[100px] h-[100px] "
						/>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup className="rounded-[50px]">
					{badgeData.map((badge) => (
						<DropdownMenuItem
							key={badge.id}
							className="justify-center"
							onSelect={() => handleBadgeSelect(badge.id)}
						>
							<SuccessBadge
								stroke={badge.stroke}
								fill={badge.fill}
								contentType={badge.contentType as "text" | "image"}
								content={badge.content}
								alt={badge.alt}
								className="w-[50px] h-[50px]"
							/>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default DropDownBadge;
