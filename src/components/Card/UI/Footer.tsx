import { CardFooter as ShadcnCardFooter } from "../../shadcn/ui/Card";

interface CardFooterProps {
	children: React.ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => (
	<ShadcnCardFooter className="border-t pt-2 mt-2">{children}</ShadcnCardFooter>
);

export default CardFooter;
