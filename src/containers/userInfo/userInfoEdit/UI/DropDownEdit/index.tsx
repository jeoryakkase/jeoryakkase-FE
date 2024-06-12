import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/shadcn/ui/DropdownMenu";

interface DropdownMenuEditProps {
	trigger: React.ReactNode | string;
	menuItems: { id: number; label: React.ReactNode }[];
	className?: string;
	childrenClassName?: string;
	menuClick?: (item: number) => void;
}

const DropdownMenuEdit = ({
	trigger,
	menuItems,
	className,
	childrenClassName,
	menuClick,
}: DropdownMenuEditProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className={`cursor-pointer ${className}`}>
				{trigger}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 p-0">
				<DropdownMenuGroup className={childrenClassName}>
					{menuItems?.map((item) => (
						<DropdownMenuItem
							key={item.id}
							className="justify-center "
							onClick={() => menuClick && menuClick(item.id)}
						>
							{item.label}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropdownMenuEdit;
