import { CardHeader as ShadcnCardHeader } from "../../shadcn/ui/Card";

interface CardHeaderProps {
	title: string;
	icon?: React.ReactNode;
}

const CardHeader = ({ title, icon }: CardHeaderProps) => (
	<ShadcnCardHeader className="flex items-center justify-between">
		<div className="flex items-center">
			{icon && <span className="mr-2">{icon}</span>}
			<h2 className="text-lg font-semibold">{title}</h2>
		</div>
	</ShadcnCardHeader>
);

export default CardHeader;
