import Container from "./UI/Container";
import CardContent from "./UI/Content";
import CardFooter from "./UI/Footer";
import CardHeader from "./UI/Header";

const Card = ({ children, highlight, className }) => {
	return (
		<Container
			highlight={highlight}
			className={`flex flex-col rounded-3xl overflow-hidden ${className}`}
		>
			{children}
		</Container>
	);
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
