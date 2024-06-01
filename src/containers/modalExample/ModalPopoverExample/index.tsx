"use client";

import { FaPlus } from "react-icons/fa";

import ModalPopover from "@components/ModalForm/UI/ModalPopover";

const ModalPopoverExample = () => {
	return (
		<ModalPopover
			popTrigger={<FaPlus />}
			popButton="확인"
			popChildren="폼내용"
			popButtonAction={() => {}}
		/>
	);
};
export default ModalPopoverExample;
