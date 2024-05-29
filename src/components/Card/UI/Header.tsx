import { CardHeader as ShadcnCardHeader } from "../../shadcn/ui/Card";

interface CardHeaderProps {
	title: string;
	icon?: React.ReactNode;
	tags?: string[];
}

const CardHeader = ({ title, icon, tags }: CardHeaderProps) => (
	<ShadcnCardHeader className="flex items-center justify-between">
		<div className="flex items-center">
			{icon && <span className="mr-2">{icon}</span>}
			<h2 className="text-lg font-semibold">{title}</h2>
		</div>
		{tags && (
			<div className="flex space-x-2">
				{tags.map((tag, index) => (
					<span
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded"
					>
						{tag}
					</span>
				))}
			</div>
		)}
	</ShadcnCardHeader>
);

export default CardHeader;
