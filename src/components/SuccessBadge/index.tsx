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
	imageClassName?: string;
}

const SuccessBadge = forwardRef<HTMLDivElement, SuccessBadgeProps>(
	(
		{ stroke, fill, className, contentType, content, alt, imageClassName },
		ref,
	) => {
		return (
			<div ref={ref} className="relative flex justify-center items-center">
				<BadgeContainer
					stroke={stroke}
					fill={fill}
					className={className}
					strokeWidth="10px"
				/>
				{contentType === "image" ? (
					<div className={`w-[60%] h-[60%] absolute ${imageClassName}`}>
						<Image
							src={content}
							alt={alt || "Badge content"}
							width={0}
							height={0}
							sizes="100vw"
							className="w-[100%] object-cover"
						/>
					</div>
				) : (
					<div className="absolute bg-none">{content}</div>
				)}
			</div>
		);
	},
);

SuccessBadge.displayName = "SuccessBadge";

export default SuccessBadge;
