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
	className?: string;
	isOpen?: boolean;
}
const UrlModal = ({
	title,
	isOpen,
	children,
	button,
	buttonAction,
	closeButton,
	className,
}: UrlModalProps) => {
	const router = useRouter();
	return (
		<Dialog defaultOpen open={isOpen}>
			<DialogContent
				className={`w-[100%] p-[40px] ${className}`}
				onInteractOutside={(e) => {
					e.preventDefault();
				}}
			>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				{children}
				<DialogFooter>
					{button && (
						<Button type="submit" onClick={buttonAction}>
							{button}
						</Button>
					)}
					{closeButton && (
						<Button
							type="button"
							bgColor="lightyellow"
							onClick={() => router.back()}
						>
							{closeButton}
						</Button>
					)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default UrlModal;
