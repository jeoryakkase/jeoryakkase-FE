import ChatIcon from "@assets/svgs/ChatIcon";

interface CommentHeaderProps {
	commentCounts: number;
}

const Header = ({ commentCounts }: CommentHeaderProps) => {
	return (
		<div className="mb-4 bg-sub-gray1 rounded-3xl p-3">
			<h1 className="text-lg font-semibold ml-3 flex items-center">
				<ChatIcon className="stroke-main-midblue w-8 h-8 mr-3" />
				댓글 {commentCounts}개 보기
			</h1>
		</div>
	);
};

export default Header;
