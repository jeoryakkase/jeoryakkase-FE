import React, { ReactElement } from "react";

import { cva, VariantProps } from "class-variance-authority";

import cn from "@utils/classnames.utils";

export interface ContentSectionProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof contentSectionVariants> {
	title: string;
	flex?: string;
	childrenClassName?: string;
	itemClassName?: string;
}

const contentSectionVariants = cva("my-4", {
	variants: {
		fontSize: {
			lg: "text-lg",
			xl: "text-xl",
		},
	},
	defaultVariants: {
		fontSize: "xl",
	},
});

const ContentSection = ({
	title,
	fontSize = "xl",
	children,
	className,
	childrenClassName,
	itemClassName,
	...props
}: ContentSectionProps) => {
	return (
		<div className={cn("my-20 w-full", className)} {...props}>
			<h2 className={cn(contentSectionVariants({ fontSize }), "font-bold")}>
				{title}
			</h2>
			<div className={cn("mt-2 flex w-full", childrenClassName)}>
				{React.Children.map(children, (child) =>
					React.isValidElement(child)
						? React.cloneElement(child as ReactElement, {
								className: cn(child.props.className, itemClassName),
							})
						: child,
				)}
			</div>
		</div>
	);
};

export { ContentSection };
