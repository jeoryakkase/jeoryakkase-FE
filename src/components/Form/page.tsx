import { FormEventHandler } from "react";

import { Button } from "./Button/page";
import { Input } from "./Input/page";
import { Textarea } from "./Textarea/page";

interface FormProps {
	children: React.ReactNode;
	className?: string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
}

export function Form({ children, className, onSubmit }: FormProps) {
	return (
		<form onSubmit={onSubmit} className={className}>
			{children}
		</form>
	);
}

Form.Input = Input;
Form.Button = Button;
Form.Textarea = Textarea;
