"use client";

import { ReactNode } from "react";

import Flex from "@components/Flex";
import { CommentProvider } from "@stores/Comment/CommentContext";

import Comment from "./UI/Comment";
import Container from "./UI/Container";
import Contents from "./UI/Contents";
import ProfileBox from "./UI/ProfileBox";

interface FeedProps {
	feedData: any;
	children?: ReactNode;
}

const Feed = ({ feedData, children }: FeedProps) => {
	return (
		<CommentProvider>
			<Container>
				<Flex className="mb-10">
					<ProfileBox
						nickname={feedData.nickname}
						profileImg={feedData.profileImg}
						isOwner={feedData.isOwner}
						isChallenge={feedData.isChallenge}
						date={feedData.date}
						badge={feedData.badge}
						writeHour={feedData.writeHour}
						progressDate={feedData.progressDate}
					/>
				</Flex>
				<Contents
					title={feedData.title}
					img={feedData.img}
					body={feedData.body}
				/>
				{feedData.category === "vote" && children}
				<Comment commentData={feedData.commentData} />
			</Container>
		</CommentProvider>
	);
};

export default Feed;
