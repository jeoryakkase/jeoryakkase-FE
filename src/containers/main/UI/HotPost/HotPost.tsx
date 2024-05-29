import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";

const HotPost = () => {
	return (
		<ContentSection
			title="염전 실시간 인기글"
			childrenClassName="flex flex-col justify-center space-x-10"
		>
			<Card highlight className="flex-grow">
				<Card.Header title="오늘 날짜" />
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</ContentSection>
	);
};

export default HotPost;
