"use client";

import { forwardRef } from "react";

import Image from "next/image";

import BadgeContainer from "@components/icons/BadgeContainer";

interface SuccessBadgeProps {
	stroke?: string;
	fill?: string;
	className?: string;
	contentType: "image" | "text";
	content: string;
	alt?: string;
}

const SuccessBadge = forwardRef<HTMLDivElement, SuccessBadgeProps>(
	({ stroke, fill, className, contentType, content, alt, ...props }, ref) => {
		return (
			<div ref={ref} className="relative flex justify-center items-center">
				<BadgeContainer stroke={stroke} fill={fill} className={className} />
				{contentType === "image" ? (
					<Image src={content} alt={alt || "Badge content"} fill {...props} />
				) : (
					<div className="absolute bg-none ">{content}</div>
				)}
			</div>
		);
	},
);

SuccessBadge.displayName = "SuccessBadge";

export default SuccessBadge;
