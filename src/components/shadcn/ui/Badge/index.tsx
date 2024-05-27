import { cva, type VariantProps } from "class-variance-authority";

import cn from "@utils/classnames.utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-xl border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default: "border-transparent bg-white text-black",
				formTag:
					"text-foreground group hover:bg-main-darkblue/80 hover:text-white",
				shadow: "border-transparent bg-white text-black shadow-default ",
			},
			size: {
				s: "px-2.5 py-0.5 text-s",
				m: "px-3 py-1 text-sm rounded-2xl",
				l: "px-4 py-2 text-lg rounded-3xl",
			},
			bgColor: {
				lightyellow: "bg-main-lightyellow",
				yellow: "bg-main-yellow",
				lightblue: "bg-main-lightblue",
				midblue: "bg-main-midblue",
				darkblue: "bg-main-darkblue",
				lightred: "bg-point-lightred",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "s",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, size, bgColor, ...props }: BadgeProps) => {
	return (
		<div
			className={cn(badgeVariants({ variant, size, bgColor }), className)}
			{...props}
		/>
	);
};

export { Badge, badgeVariants };
