import { cn } from "@utils/classNamesUtil";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: JSX.Element;
	variant?: "primary" | "secondary";
	size?: "base" | "lg";
}

export const Button = ({
	icon,
	children,
	className,
	variant = "primary",
	size = "base",
	...props
}: ButtonProps) => {
	const buttonClass = cn(
		"rounded-[50px]  transition-colors w-full font-semibold",
		{
			"bg-primary shadow-custom-default hover:bg-primary-hover hover:shadow-custom-inner":
				variant === "primary",
			"bg-secondary shadow-custom-default hover:bg-secondary-hover hover:shadow-custom-inner":
				variant === "secondary",
			"text-base": size === "base",
			"text-lg": size === "lg",
		},
		className,
	);
	return (
		<button {...props} className={buttonClass}>
			{icon}
			{children}
		</button>
	);
};
