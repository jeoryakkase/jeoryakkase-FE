"use client";

import { useEffect } from "react";

import { useCommentContext } from "@stores/Comment/CommentContext";

import CommentBox, { CommentProps } from "./CommentBox";
import Header from "./Header";

interface CommentArrProps {
	commentData: {
		commentCounts: number;
		postId: string;
		comments: CommentProps[];
	};
}

const Comment = ({ commentData }: CommentArrProps) => {
	const { comments, setComments } = useCommentContext();

	useEffect(() => {
		setComments(
			commentData.postId,
			commentData.commentCounts,
			commentData.comments,
		);
	}, []);

	return (
		<section>
			<Header commentCounts={commentData.commentCounts} />
			<div className="p-2">
				{comments[commentData.postId]?.comments.map((comment) => (
					<CommentBox
						key={comment.id}
						comment={comment}
						onReplyEdit={() => console.log("수정")}
						onReplyDelete={() => console.log("삭제")}
					/>
				))}
			</div>
		</section>
	);
};

export default Comment;
