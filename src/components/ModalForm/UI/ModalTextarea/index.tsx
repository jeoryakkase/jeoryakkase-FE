import { forwardRef } from "react";

import { Textarea } from "@components/Textarea";

import ModalContainer from "../ModalContainer";

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	title?: string;
}

const ModalTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, title, ...props }, ref) => {
		return (
			<ModalContainer title={title}>
				<Textarea ref={ref} {...props} className={`resize-none ${className}`} />
			</ModalContainer>
		);
	},
);
ModalTextarea.displayName = "ModalTextarea";

export default ModalTextarea;
