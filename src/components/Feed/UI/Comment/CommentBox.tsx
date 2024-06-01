import Image from "next/image";

import CommentBtn from "./CommentBtn";

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
	onReply?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
}

const CommentBox = ({
	comment,
	onReply,
	onEdit,
	onDelete,
}: CommentBoxProps) => {
	return (
		<div
			key={comment.id}
			className="flex justify-between"
			style={{ marginLeft: `${comment.depth * 20}px` }}
		>
			<div className="flex items-center">
				<Image
					src={comment.profileImg}
					alt={`${comment.nickname}님의 프로필 사진`}
					className="w-6 h-6 rounded-full mr-2"
					width={40}
					height={40}
				/>
				<span className="font-bold">{comment.nickname}</span>
				{comment.isOwner && (
					<span className="ml-2 text-sm text-gray-500">(작성자)</span>
				)}
			</div>
			<p>{comment.comment}</p>
			<CommentBtn
				isOwner={comment.isOwner}
				onReply={onReply}
				onEdit={onEdit}
				onDelete={onDelete}
			/>
		</div>
	);
};

export default CommentBox;
