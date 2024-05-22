import BannerCarousels from "@components/BannerCarousel";
import Card from "@components/Card";
import React from "react";

const mainPage = () => {
	return (
		<div>
			<BannerCarousels />
			<Card highlight={true}>
				<Card.Header title="오늘 날짜"></Card.Header>
				<Card.Content>
					<p>내용</p>
				</Card.Content>
			</Card>
		</div>
	);
};

export default mainPage;
