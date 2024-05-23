import { Card as ShadcnCard } from "../../shadcn/ui/Card";

interface CardProps {
	children: React.ReactNode;
	highlight?: boolean;
	className?: string;
}

const Container = ({ children, highlight, className }: CardProps) => {
	const borderColor = highlight ? "border-yellow-400" : "border-gray-200";
	return (
		<ShadcnCard
			className={`p-4 rounded-lg shadow-md bg-white border-2 ${borderColor} ${className}`}
		>
			{children}
		</ShadcnCard>
	);
};

export default Container;
