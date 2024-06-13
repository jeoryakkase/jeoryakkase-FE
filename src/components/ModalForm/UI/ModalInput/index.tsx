import { InputHTMLAttributes, forwardRef } from "react";

import { Input } from "@components/Input";

import ModalContainer from "../ModalContainer";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	placeholder?: string;
	title?: string;
	type?: "text" | "number";
}

// eslint-disable-next-line react/display-name
const ModalInput = forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, placeholder, title, type = "text", ...props }: InputProps,
		ref,
	) => {
		return (
			<ModalContainer title={title}>
				<Input
					{...props}
					className={`p-[20px] ${className}`}
					placeholder={placeholder}
					type={type}
					ref={ref}
				/>
				{type === "number" && (
					<span className="absolute top-[10px] right-0 flex items-center pr-3 text-gray-500">
						원
					</span>
				)}
			</ModalContainer>
		);
	},
);

export default ModalInput;
