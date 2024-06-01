interface ContentsProps {
	title?: string;
	body: string;
}

const Contents = ({ title, body }: ContentsProps) => {
	return (
		<div className="contents mb-4">
			{title && <h2 className="text-xl font-bold">{title}</h2>}
			{/* 이미지가 들어가야하지 않니? */}
			<p>{body}</p>
		</div>
	);
};

export default Contents;
