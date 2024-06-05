import Image from "next/image";

interface ContentsProps {
	title?: string;
	body: string;
	img?: string;
}

const Contents = ({ title, body, img }: ContentsProps) => {
	return (
		<div className="mb-16 flex flex-col items-center">
			{title && <h2 className="text-xl font-bold mb-5">{title}</h2>}
			{/* 이미지가 들어가야하지 않니? */}
			<div className="w-full flex flex-col items-center">
				{img && (
					<Image
						src={img}
						width={300}
						height={300}
						alt={`${title} 제목의 챌린지 인증글 사진`}
						className="rounded-2xl"
					/>
				)}
				<p className="mt-10">{body}</p>
			</div>
		</div>
	);
};

export default Contents;
