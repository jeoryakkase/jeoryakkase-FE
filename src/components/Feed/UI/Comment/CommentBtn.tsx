import { Button } from "@components/Button";

interface CommentBtnProps {
	isOwner: boolean;
	onReply?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
}

const CommentBtn = ({
	isOwner,
	onReply,
	onEdit,
	onDelete,
}: CommentBtnProps) => {
	return (
		<div className="comment-btns mt-2">
			{!isOwner && (
				<Button onClick={onReply} className="mr-2">
					답글
				</Button>
			)}
			{isOwner && (
				<>
					<Button onClick={onEdit} className="mr-2">
						수정
					</Button>
					<Button onClick={onDelete} className="text-red-500">
						삭제
					</Button>
				</>
			)}
		</div>
	);
};

export default CommentBtn;
