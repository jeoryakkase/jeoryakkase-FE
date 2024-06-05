import { Button } from "@components/Button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/shadcn/ui/Dialog";

interface ModalProps {
	triggerChildren: React.ReactNode;
	title?: string;
	children: React.ReactNode;
	button?: React.ReactNode;
	buttonAction?: () => void;
	closeButton?: React.ReactNode;
	subText?: string;
}
const Modal = ({
	triggerChildren,
	title,
	children,
	button,
	buttonAction,
	closeButton,
	subText,
}: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{triggerChildren}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					{title && <DialogTitle>{title}</DialogTitle>}
				</DialogHeader>
				{children}
				{subText && <p className="text-point-red mt-2">{subText}</p>}
				{(button || closeButton) && (
					<DialogFooter>
						{button && (
							<DialogClose asChild>
								<Button type="button" onClick={buttonAction}>
									{button}
								</Button>
							</DialogClose>
						)}
						{closeButton && (
							<DialogClose asChild>
								<Button type="button" bgColor="lightyellow">
									{closeButton}
								</Button>
							</DialogClose>
						)}
					</DialogFooter>
				)}
			</DialogContent>
		</Dialog>
	);
};
export default Modal;
