"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import SadCharacter from "@assets/images/character/character03.png";
import UrlModal from "@components/UrlModal";
import giveUpGoalId from "@services/user/goals/giveUpGoalId";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Params = {
	goalId: string;
};
const NaegongGiveUpModal = () => {
	const router = useRouter();
	const params = useParams<Params>();
	const goalId = params?.goalId;
	const queryClient = useQueryClient();
	const { mutate: giveUpGoalMutation } = useMutation({
		mutationFn: giveUpGoalId,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getGoals"] });
			router.replace("/naegong");
		},
	});
	const handleGiveUp = () => {
		if (goalId) {
			giveUpGoalMutation({ goalId: parseInt(goalId, 10) });
		}
	};

	return (
		<UrlModal
			button="네"
			buttonAction={handleGiveUp}
			closeButton="아니오"
			className="pb-[40px]"
		>
			<div className="flex flex-col gap-[20px] items-center">
				<Image width={200} height={200} src={SadCharacter} alt="SadCharacter" />
				<div className="font-bold text-xxl mb-[20px]">
					정말 포기하시겠습니까
				</div>
			</div>
		</UrlModal>
	);
};

export default NaegongGiveUpModal;
