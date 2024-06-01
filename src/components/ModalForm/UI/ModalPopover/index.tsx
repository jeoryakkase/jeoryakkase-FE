import { Button } from "@components/Button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/shadcn/ui/Popover";
import { PopoverClose } from "@radix-ui/react-popover";

export interface ModalPopoverProps {
	popTrigger: React.ReactNode;
	popChildren: React.ReactNode;
	popButton?: React.ReactNode;
	popButtonAction?: () => void;
}

const ModalPopover = ({
	popTrigger,
	popChildren,
	popButton,
	popButtonAction,
}: ModalPopoverProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">{popTrigger}</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				{popChildren}
				<PopoverClose asChild>
					<Button onClick={popButtonAction}>{popButton}</Button>
				</PopoverClose>
			</PopoverContent>
		</Popover>
	);
};

export default ModalPopover;
