import { Button } from "@components/Button";

interface CommentBtnProps {
	isOwner: boolean;
	isEditing: boolean;
	onReply?: () => void;
	onEdit?: () => void;
	onDelete?: () => void;
}

const CommentBtn = ({
	isOwner,
	isEditing,
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
			{isOwner && !isEditing && (
				<div className="flex">
					<Button onClick={onEdit} bgColor="white" className="mr-2 mb-2">
						수정
					</Button>
					<Button onClick={onDelete} bgColor="lightred" className="text-white">
						삭제
					</Button>
				</div>
			)}
			{isOwner && isEditing && (
				<div className="flex">
					<Button onClick={onEdit} bgColor="white" className="mr-2 mb-2">
						수정 완료
					</Button>
					<Button onClick={onDelete} bgColor="lightred" className="text-white">
						취소
					</Button>
				</div>
			)}
		</div>
	);
};

export default CommentBtn;
