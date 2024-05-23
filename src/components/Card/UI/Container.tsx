import { Card as ShadcnCard } from "./shadCard";

interface CardProps {
	children: React.ReactNode;
	highlight?: boolean;
}

const Container = ({ children, highlight }: CardProps) => {
	const borderColor = highlight ? "border-yellow-400" : "border-gray-200";
	return (
		<ShadcnCard
			className={`p-4 rounded-lg shadow-md bg-white border-2 ${borderColor}`}
		>
			{children}
		</ShadcnCard>
	);
};

export default Container;
