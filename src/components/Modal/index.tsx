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
}
const Modal = ({
	triggerChildren,
	title,
	children,
	button,
	buttonAction,
	closeButton,
}: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{triggerChildren}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					{title && <DialogTitle>{title}</DialogTitle>}
				</DialogHeader>
				{children}
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
								<Button type="button" variant="secondary">
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
