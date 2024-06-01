import { CardHeader as ShadcnCardHeader } from "../../shadcn/ui/Card";

interface CardHeaderProps {
	title: string;
	icon?: React.ReactNode;
}

const CardHeader = ({ title, icon }: CardHeaderProps) => (
	<ShadcnCardHeader className="flex items-center justify-center">
		<div className="flex items-center w-full ">
			{icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
			<h2 className="text-lg font-semibold truncate text-center w-full">
				{title}
			</h2>
		</div>
	</ShadcnCardHeader>
);

export default CardHeader;
