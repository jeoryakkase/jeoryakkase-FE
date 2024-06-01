import { useEffect } from "react";

import { comments as dummyComments } from "@containers/challenge/dummy";
import { useCommentContext } from "@stores/Commnet/CommentContext";

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
		setComments(commentData.postId, commentData.commentCounts, dummyComments);
	}, []);

	return (
		<section>
			<Header commentCounts={commentData.commentCounts} />
			{comments[commentData.postId]?.comments.map((comment) => (
				<CommentBox
					key={comment.id}
					comment={comment}
					onReply={() => console.log("답글")}
					onEdit={() => console.log("수정")}
					onDelete={() => console.log("삭제")}
				/>
			))}
		</section>
	);
};

export default Comment;
