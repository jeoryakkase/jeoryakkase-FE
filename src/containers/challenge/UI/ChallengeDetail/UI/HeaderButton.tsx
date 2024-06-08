import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@components/Button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/Select";

const HeaderButton = () => {
	const { challengeId } = useParams();
	return (
		<section className="flex flex-row justify-end">
			<Link href={`/challenge/${challengeId}/record`}>
				<Button
					bgColor="white"
					className="border-sub-gray1 rounded-xl mr-3 mb-4 border-2"
				>
					인증하기
				</Button>
			</Link>
			<Link href={`/challenge/${challengeId}/record`}>
				<Button bgColor="red" className="rounded-xl border-2">
					포기하기
				</Button>
			</Link>
			<Select>
				<SelectTrigger className="w-[200px] rounded-lg ml-3">
					<SelectValue placeholder="전체" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="내 인증 모아보기">내 인증 모아보기</SelectItem>
					<SelectItem value="전체">전체</SelectItem>
				</SelectContent>
			</Select>
			{/* {isModalOpen && (
				<ModalSadContent
					modalContent="포기"
					subText="포기하시면 어쩌구저쩌구"
					modalButtonAction={handleCloseModal} // 모달 버튼 액션으로 모달 닫기
				/>
			)} */}
		</section>
	);
};

export default HeaderButton;
