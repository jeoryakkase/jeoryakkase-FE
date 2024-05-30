import { CardContent as ShadcnCardContent } from "../../shadcn/ui/Card";

interface CardContentProps {
	children: React.ReactNode;
}

const CardContent = ({ children }: CardContentProps) => (
	<ShadcnCardContent>{children}</ShadcnCardContent>
);

export default CardContent;
