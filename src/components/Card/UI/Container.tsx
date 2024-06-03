import { Card as ShadcnCard } from "../../shadcn/ui/Card";

interface CardProps {
	children: React.ReactNode;
	highlight?: string;
	className?: string;
}

const borderColorMap = {
	yellow: "border-main-yellow-400",
	gray: "border-sub-gray3-400",
	bronze: "border-point-bronze-400",
};

const Container = ({ children, highlight = "", className }: CardProps) => {
	const borderColor = borderColorMap[highlight] || "border-gray-200";
	return (
		<ShadcnCard
			className={`p-4 rounded-lg shadow-md bg-white border-2 ${borderColor} ${className}`}
		>
			{children}
		</ShadcnCard>
	);
};

export default Container;
