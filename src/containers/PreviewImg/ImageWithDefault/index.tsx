"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	defaultSrc: string;
	width?: number | `${number}`;
	height?: number | `${number}`;
}

const ImageWithDefault = ({
	src,
	defaultSrc,
	...props
}: ImageWithFallbackProps) => {
	const [imageSrc, setImageSrc] = useState(src);

	const handleImageError = () => {
		if (imageSrc !== defaultSrc) {
			setImageSrc(defaultSrc);
		}
	};

	return (
		<Image
			priority
			src={imageSrc}
			fill
			alt="이미지"
			onError={handleImageError}
			{...props}
		/>
	);
};

export default ImageWithDefault;
