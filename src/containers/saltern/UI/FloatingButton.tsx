import Link from "next/link";

const FloatingButton = () => {
	return (
		<div className="fixed right-96 bottom-52 flex flex-col items-center">
			<div className="relative group">
				<div className="absolute w-32 top-24 left-10 mb-2 text-lg text-center bg-main-lightyellow text-black shadow-custom-default p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					글 작성하기
				</div>
				<Link href="/saltern/write">
					<div className="w-[100px] h-[100px] bg-main-midblue text-white py-9 rounded-full shadow-lg text-center hover:bg-main-darkblue">
						✍️
					</div>
				</Link>
			</div>
		</div>
	);
};

export default FloatingButton;
