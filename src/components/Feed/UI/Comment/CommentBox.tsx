import { useState } from "react";

import Image from "next/image";

import { Input } from "@components/Input";
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
}

const CommentBox = ({ comment }: CommentBoxProps) => {
	const [isReplying, setIsReplying] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const handleReplyClick = () => {
		setIsReplying(true);
	};

	const handleReplyCancel = () => {
		setIsReplying(false);
	};

	const handleReplySubmit = () => {
		setIsReplying(false);
	};

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleEditCancel = () => {
		setIsEditing(false);
	};

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
				{!isEditing ? (
					<p className="w-full">{comment.comment}</p>
				) : (
					<Input defaultValue={comment.comment} className="text-center" />
				)}
				{!isReplying && (
					<CommentBtn
						isOwner={comment.isOwner}
						onReply={handleReplyClick}
						isEditing={isEditing}
						onEdit={handleEditClick}
						onDelete={handleEditCancel}
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
