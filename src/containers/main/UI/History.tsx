import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";

const History = () => {
	return (
		<ContentSection
			title="소금기 히스토리"
			childrenClassName="flex flex-row justify-center space-x-10"
		>
			<Card highlight={true} className="w-[300px]">
				<Card.Header title="오늘 날짜"></Card.Header>
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
			<Card highlight={true} className="w-[300px]">
				<Card.Header title="오늘 날짜"></Card.Header>
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
			<Card highlight={true} className="w-[300px]">
				<Card.Header title="오늘 날짜"></Card.Header>
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default History;
