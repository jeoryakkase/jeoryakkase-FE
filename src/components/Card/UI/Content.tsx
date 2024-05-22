import { CardContent as ShadcnCardContent } from "./shadCard";

interface CardContentProps {
	children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => (
	<ShadcnCardContent className="mb-2">{children}</ShadcnCardContent>
);

export default CardContent;
