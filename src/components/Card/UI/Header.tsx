import { CardHeader as ShadcnCardHeader } from "../../shadcn/ui/Card";

interface CardHeaderProps {
	title: string;
	icon?: React.ReactNode;
	className?: string;
}

const CardHeader = ({ title, icon, className }: CardHeaderProps) => (
	<ShadcnCardHeader
		className={`flex items-center justify-center  ${className}`}
	>
		<div className="flex items-center w-full">
			{icon && <span className="mr-2">{icon}</span>}
			<h2
				className={`text-lg font-semibold truncate text-center w-full ${className}`}
			>
				{title}
			</h2>
		</div>
	</ShadcnCardHeader>
);

export default CardHeader;
