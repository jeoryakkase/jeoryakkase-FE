import Card from "@components/Card";

const HotPostContent = () => {
	return (
		<section className="flex flex-col">
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
		</section>
	);
};

export default HotPostContent;
