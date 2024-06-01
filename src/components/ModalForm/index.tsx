import { FormEventHandler } from "react";

import ModalContainer from "./UI/ModalContainer";
import ModalImgInput from "./UI/ModalImgInput";
import ModalInput from "./UI/ModalInput";
import ModalSelect from "./UI/ModalSelect";
import ModalTextarea from "./UI/ModalTextarea";

interface FormProps {
	children: React.ReactNode;
	className?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

const ModalForm = ({ children, className, onSubmit }: FormProps) => {
	return (
		<form className={` ${className}`} onSubmit={onSubmit}>
			{children}
		</form>
	);
};
ModalForm.Container = ModalContainer;
ModalForm.Input = ModalInput;
ModalForm.ImgInput = ModalImgInput;
ModalForm.Textarea = ModalTextarea;
ModalForm.Select = ModalSelect;

export default ModalForm;