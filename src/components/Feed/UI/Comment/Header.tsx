interface CommentHeaderProps {
	commentCounts: number;
}

const Header = ({ commentCounts }: CommentHeaderProps) => {
	return (
		<div className="header mb-4">
			<h1 className="text-2xl font-bold">댓글 {commentCounts}개 보기</h1>
		</div>
	);
};

export default Header;
