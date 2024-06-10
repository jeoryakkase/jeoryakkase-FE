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
		<div className="flex flex-col mt-2">
			{!isOwner && (
				<Button onClick={onReply} bgColor="white" className="mr-2">
					댓글 달기
				</Button>
			)}
			{isOwner && (
				<div className="flex">
					<Button onClick={onEdit} bgColor="white" className="mr-2 mb-2">
						수정
					</Button>
					<Button onClick={onDelete} bgColor="lightred" className="text-white">
						삭제
					</Button>
				</div>
			)}
		</div>
	);
};

export default CommentBtn;
