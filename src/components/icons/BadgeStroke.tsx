import { FC, SVGProps } from "react";

const BadgeStroke: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			width="476"
			height="453"
			viewBox="0 0 476 453"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="black"
			{...props}
		>
			<path d="M0.823657 172.937L238 0.618039L475.176 172.937L384.583 451.754H91.4169L0.823657 172.937Z" />
		</svg>
	);
};

export default BadgeStroke;
