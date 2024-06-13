"use client";

import { useRouter } from "next/navigation";

import { Button } from "@components/Button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@components/shadcn/ui/Dialog";

interface UrlModalProps {
	title?: string;
	children: React.ReactNode;
	button?: React.ReactNode;
	buttonAction?: () => void;
	closeButton?: React.ReactNode;
}
const UrlModal = ({
	title,
	children,
	button,
	buttonAction,
	closeButton,
}: UrlModalProps) => {
	const router = useRouter();
	return (
		<Dialog defaultOpen>
			<DialogContent
				className="sm:max-w-[425px]"
				onInteractOutside={(e) => {
					e.preventDefault();
				}}
			>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				{children}
				<DialogFooter>
					<Button type="button" onClick={buttonAction}>
						{button}
					</Button>

					<Button
						type="button"
						bgColor="lightyellow"
						onClick={() => router.back()}
					>
						{closeButton}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default UrlModal;
