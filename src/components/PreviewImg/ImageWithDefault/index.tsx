"use client";

import { useState } from "react";

import Image, { StaticImageData } from "next/image";

interface ImageWithFallbackProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	defaultSrc: string | StaticImageData;
	width?: number | `${number}`;
	height?: number | `${number}`;
}

const ImageWithDefault = ({
	src,
	defaultSrc,
	...props
}: ImageWithFallbackProps) => {
	const [imageSrc, setImageSrc] = useState<string | StaticImageData>(src);

	const handleImageError = () => {
		if (imageSrc !== defaultSrc) {
			setImageSrc(defaultSrc);
		}
	};

	return (
		<Image
			priority
			src={imageSrc}
			width={0}
			height={0}
			sizes="100vw"
			className="w-[100%] object-cover"
			alt="이미지"
			onError={handleImageError}
			{...props}
		/>
	);
};

export default ImageWithDefault;
