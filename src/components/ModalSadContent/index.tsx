import Image from "next/image";

import SadSalt from "@assets/images/character/character03.png";
import { Button } from "@components/Button";
import Modal from "@components/Modal";

interface ModalSadContentProps {
	modalContent: string;
	subText: string;
	modalButtonAction: () => void;
}

const ModalSadContent = ({
	modalContent,
	subText,
	modalButtonAction,
}: ModalSadContentProps) => {
	return (
		<Modal
			triggerChildren={<Button>버튼</Button>}
			title={`정말 ${modalContent} 하시겠습니까?`}
			subText={subText}
			button="네"
			closeButton="아니오"
			buttonAction={modalButtonAction}
		>
			<div>
				<Image src={SadSalt} alt="슬픈 소금이" width="200" height="200" />
			</div>
		</Modal>
	);
};

export default ModalSadContent;
