import { CardContent as ShadcnCardContent } from "../../shadcn/ui/Card";

interface CardContentProps {
	children: React.ReactNode;
	className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => (
	<ShadcnCardContent className={className}>{children}</ShadcnCardContent>
);

export default CardContent;
