"use client";

import { Button } from "@components/Button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@components/shadcn/ui/Dialog";

const UrlModal = () => {
	return (
		<Dialog defaultOpen>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>타이틀</DialogTitle>
				</DialogHeader>
				내용
				<DialogFooter>
					<Button type="button">버튼</Button>

					<Button type="button" bgColor="lightyellow">
						닫기버튼
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default UrlModal;
