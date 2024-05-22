import React from "react";

import { forwardRef } from "react";

interface ContainerProps {
	title?: string;
	children: React.ReactNode;
}

const Container = ({ title, children, ...props }: ContainerProps) => {
	return (
		<label className={`text-base`} {...props}>
			<div className={`mb-[10px] font-semibold`}>{title}</div>
			<div className={`flex gap-[20px]`}>{children}</div>
		</label>
	);
};

export default Container;
