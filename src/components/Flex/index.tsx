type Justify = "start" | "end" | "center" | "between" | "around";
type Align = "start" | "end" | "center" | "baseline";
type Direction = "row" | "column";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	gap?: number;
	justify?: Justify;
	align?: Align;
	direction?: Direction;
	style?: React.CSSProperties;
}

const Flex = ({
	gap,
	justify,
	align,
	direction,
	children,
	style,
	...rest
}: Props) => {
	const classes = [
		"flex",
		"w-full",
		direction === "column" ? "flex-col" : "flex-row",
		gap ? `gap-${gap}` : "",
		justify ? justifyClasses[justify] : justifyClasses.start,
		align ? alignClasses[align] : alignClasses.start,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div {...rest} className={classes} style={style}>
			{children}
		</div>
	);
};

export default Flex;

const justifyClasses = {
	start: "justify-start",
	end: "justify-end",
	center: "justify-center",
	between: "justify-between",
	around: "justify-around",
} as const;

const alignClasses = {
	start: "items-start",
	end: "items-end",
	center: "items-center",
	baseline: "items-baseline",
} as const;
