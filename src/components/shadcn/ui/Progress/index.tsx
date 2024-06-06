"use client";

import { forwardRef } from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import cn from "@utils/classnames.utils";

interface ProgressProps
	extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
	value: number;
	indicatorClassName?: string;
}

const Progress = forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	ProgressProps
>(({ className, value, indicatorClassName, ...props }, ref) => {
	const combinedIndicatorClassName = cn(
		"h-full w-full flex-1 transition-all",
		indicatorClassName,
	);

	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				"relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
				className,
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className={combinedIndicatorClassName}
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export default Progress;
