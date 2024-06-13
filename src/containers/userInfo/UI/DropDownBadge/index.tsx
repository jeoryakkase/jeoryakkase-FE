"use client";

import { Button } from "@components/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/shadcn/ui/DropdownMenu";
import SuccessBadge from "@components/SuccessBadge";
import badgeData from "@components/SuccessBadge/BadgeData";
import {
	MemberChallengesBadges,
	RepresentativeBadge,
} from "@containers/userInfo/types";
import showToast from "@lib/toastConfig";
import putRepresentBage from "@services/user/badges/putRepresentBage";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DropDownBadgeProps {
	representativeBadge?: RepresentativeBadge[];
	generalBadges?: MemberChallengesBadges[];
}
const DropDownBadge = ({
	representativeBadge,
	generalBadges,
}: DropDownBadgeProps) => {
	const queryClient = useQueryClient();
	const { mutate: represntBadge } = useMutation({
		mutationFn: putRepresentBage,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["representativeBadges"] });
			showToast({
				type: "success",
				message: "대표 뱃지가 선택되었습니다.",
			});
		},
		onError: () => {
			showToast({
				type: "error",
				message: "대표 뱃지 등록에 실패했습니다.",
			});
		},
	});
	const handleBadgeSelect = (name: string) => {
		// setSelectedBadgeName(name);
		represntBadge(name);
	};
	// representativeBadge가 없을 경우에 대비하여 기본값 처리
	const defaultBadge = badgeData[0];
	const selectedBadge =
		representativeBadge && representativeBadge.length > 0
			? representativeBadge[0]
			: undefined;

	const badges = generalBadges || [];
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					bgColor="transparent"
					shadow="transparent"
					className="bg-none hover:bg-none w-[100%] h-[100%]"
				>
					{selectedBadge ? (
						<SuccessBadge
							stroke={selectedBadge.stroke}
							fill={selectedBadge.fill}
							alt={selectedBadge.badgeDesc}
							contentType="image"
							content={selectedBadge.badgeImage}
							className="w-[100px] h-[100px] "
						/>
					) : (
						<SuccessBadge
							stroke={defaultBadge.stroke}
							fill={defaultBadge.fill}
							alt={defaultBadge.alt}
							contentType={defaultBadge.contentType as "text" | "image"}
							content={defaultBadge.content}
							className="w-[100px] h-[100px] "
						/>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup className="rounded-[50px]">
					{badges?.map((badge) => (
						<DropdownMenuItem
							key={badge.name}
							className="justify-center cursor-pointer"
							onSelect={() => handleBadgeSelect(badge.name)}
						>
							<SuccessBadge
								stroke={badge.stroke}
								fill={badge.fill}
								contentType="image"
								content={badge.badgeImage}
								alt={badge.badgeDesc}
								className="w-[50px] h-[50px]"
							/>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropDownBadge;
