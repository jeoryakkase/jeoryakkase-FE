import { useState } from "react";

import Image from "next/image";

import cn from "@utils/classnames.utils";

import CommentBtn from "./CommentBtn";
import ReplyBox from "./ReplyBox";

export interface CommentProps {
	id: number;
	nickname: string;
	profileImg: string;
	comment: string;
	depth: number;
	level: number;
	isOwner: boolean;
}

interface CommentBoxProps {
	comment: CommentProps;
	onReplyEdit?: () => void;
	onReplyDelete?: () => void;
}

const CommentBox = ({
	comment,
	onReplyEdit,
	onReplyDelete,
}: CommentBoxProps) => {
	const [isReplying, setIsReplying] = useState(false);

	const handleReplyClick = () => {
		setIsReplying(true);
	};

	const handleReplyCancel = () => {
		setIsReplying(false);
	};

	const handleReplySubmit = (replyComment: string) => {
		console.log("성공", replyComment);
		setIsReplying(false);
	};

	// useEffect(() => {}, [isReplying]);

	return (
		<section className="flex flex-col mb-4">
			<div
				key={comment.id}
				className={cn("flex justify-between items-center", {
					"bg-main-lightyellow rounded-2xl p-4": comment.depth !== 0,
					[`ml-${comment.depth * 5}`]: comment.depth !== 0,
				})}
			>
				<div className="flex items-center w-3/12">
					<Image
						src={comment.profileImg}
						alt={`${comment.nickname}님의 프로필 사진`}
						className="w-6 h-6 rounded-full mr-2"
						width={40}
						height={40}
					/>
					<span className="font-bold">{comment.nickname}</span>
					{comment.isOwner && (
						<span className="ml-2 text-sm text-main-darkgray">내 댓글</span>
					)}
				</div>
				<p className="w-full">{comment.comment}</p>
				{!isReplying && (
					<CommentBtn
						isOwner={comment.isOwner}
						onReply={handleReplyClick}
						onEdit={onReplyEdit}
						onDelete={onReplyDelete}
					/>
				)}
			</div>
			<div className="flex mt-3">
				{isReplying && (
					<ReplyBox
						onReplyCommentSubmit={handleReplySubmit}
						onCommentCancel={handleReplyCancel}
					/>
				)}
			</div>
		</section>
	);
};

export default CommentBox;
