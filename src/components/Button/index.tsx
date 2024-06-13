import { forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import cn from "@utils/classnames.utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "rounded-[50px] hover:shadow-custom-inner",
				destructive:
					"rounded-[50px] bg-destructive text-destructive-foreground hover:shadow-custom-inner",
				outline:
					"border border-input rounded-[50px] hover:shadow-custom-inner ",
				secondary: "rounded-[50px] bg-secondary  hover:shadow-custom-inner",
				ghost: "rounded-[50px] p-0",
				link: "rounded-[50px] text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-[30px] py-[20px]",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9",
			},
			bgColor: {
				yellow: "bg-main-yellow",
				lightyellow: "bg-main-lightyellow ",
				lightblue: "bg-main-lightblue ",
				midblue: "bg-main-midblue text-white ",
				darkblue: "bg-main-darkblue text-white ",
				lightred: "bg-point-lightred text-white ",
				red: "bg-point-red text-white ",
				navy: "bg-main-navy text-white ",
				white: "bg-white",
				transparent: "bg-transparent",
			},
			shadow: {
				default: "shadow-button-shadow",
				transparent: "shadow-transparent",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			bgColor: "yellow",
			shadow: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ className, variant, size, bgColor, shadow, asChild = false, ...props },
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					buttonVariants({ variant, size, bgColor, shadow, className }),
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
