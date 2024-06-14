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
						nickname={feedData.profileData.nickname}
						profileImg={feedData.profileData.profileImg}
						isOwner={feedData.profileData.isOwner}
						isChallenge={feedData.profileData.isChallenge}
						date={feedData.profileData.date}
						badge={feedData.profileData.badge}
						writeHour={feedData.profileData.writeHour}
						progressDate={feedData.profileData.progressDate}
						title={feedData.profileData.title}
						img={feedData.profileData.img}
					/>
				</Flex>
				<Contents
					title={feedData.content.title}
					img={feedData.content.img}
					body={feedData.content.body}
				/>
				{feedData.category === "vote" && children}
				<Comment commentData={feedData.commentData} />
			</Container>
		</CommentProvider>
	);
};

export default Feed;
