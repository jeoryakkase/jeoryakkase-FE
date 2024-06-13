import Image from "next/image";
import { GoBookmark } from "react-icons/go";

import { Button } from "@components/Button";
import Card from "@components/Card";
import showToast from "@lib/toastConfig";
import bookMarkOption from "@services/user/saltern";
import postBookMark from "@services/user/saltern/postBookMark";
import { useMutation, useQuery } from "@tanstack/react-query";

const UerInfoTipStorage = () => {
	const { data: bookmarks } = useQuery({
		...bookMarkOption.getBookMark(),
	});
	const { mutate: bookMark } = useMutation({
		mutationFn: postBookMark,
		onSuccess: () => {
			showToast({
				type: "success",
				message: "보관함에서 삭제되었습니다.",
			});
		},
	});
	return (
		<div className="flex gap-[20px]">
			{bookmarks?.map((bookmark) => (
				<Card
					key={bookmark.id}
					className="flex flex-col gap-[20px] items-start w-[300px] h-[300px] overflow-hidden text-ellipsis "
				>
					<div className="flex items-center justify-between w-full">
						<Card.Header title={bookmark.title} />
						<Button
							className="bg-main-yellow  rounded-full p-[10px]"
							onClick={() => bookMark(bookmark.id)}
						>
							<GoBookmark
								color="#fff"
								className="w-[30px] h-[30px]"
								strokeWidth="1px"
							/>
						</Button>
					</div>

					<Card.Content>
						{/* <p>{bookmark.date}</p> */}
						<div className="w-[160px] ">
							<Image
								src={bookmark.imageUrls}
								alt=""
								width={0}
								height={0}
								sizes="100vw"
								className="static w-[100%] object-cover"
							/>
						</div>
						<p>{bookmark.contents}</p>
					</Card.Content>
				</Card>
			))}
		</div>
	);
};

export default UerInfoTipStorage;
