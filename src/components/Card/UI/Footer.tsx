import { CardFooter as ShadcnCardFooter } from "./shadCard";

interface CardFooterProps {
	children: React.ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => (
	<ShadcnCardFooter className="border-t pt-2 mt-2">{children}</ShadcnCardFooter>
);

export default CardFooter;
