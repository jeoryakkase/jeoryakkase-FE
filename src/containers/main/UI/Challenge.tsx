import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";

const Challenge = () => {
	return (
		<ContentSection
			title="참여 중인 챌린지"
			childrenClassName="flex flex-row justify-center space-x-10"
			itemClassName="flex-grow"
		>
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>{" "}
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default Challenge;
