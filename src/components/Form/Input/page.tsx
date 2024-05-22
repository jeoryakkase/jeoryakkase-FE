import React from "react";
import { InputHTMLAttributes, forwardRef } from "react";
import Container from "../Container/page";
import { cn } from "@utils/classNamesUtil";
import { Button } from "../Button/page";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	buttonText?: string;
	buttonClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, title, buttonText, buttonClick, ...props }, ref) => {
		return (
			<Container title={title}>
				<input
					ref={ref}
					className={cn(
						"px-[20px] py-[10px] w-full rounded-[50px] shadow-custom-default focus:outline-none focus:ring-2 focus:ring-main-yellow placeholder:text-sm",
						className,
					)}
					{...props}
				/>
				{buttonText && (
					<Button className={`w-[35%]`} type="button" onClick={buttonClick}>
						{buttonText}
					</Button>
				)}
			</Container>
		);
	},
);
