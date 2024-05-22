import Container from "./UI/Container";
import CardContent from "./UI/Content";
import CardFooter from "./UI/Footer";
import CardHeader from "./UI/Header";

const Card = ({ children, highlight }) => {
	return <Container highlight={highlight}>{children}</Container>;
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
