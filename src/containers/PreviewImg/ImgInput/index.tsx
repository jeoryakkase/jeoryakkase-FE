"use client";

import { Input } from "@components/shadcn/ui/Input";
import getImgPreview from "@lib/getImgPreview";
import { useEffect, useRef, useState } from "react";
import ImageWithDefault from "../ImageWithDefault";
import Image from "next/image";

interface ImgInputProps {
	id: string;
	initialImage?: string;
	setProfileImageData: (file: File) => void;
}

export default function ImgInput({
	id,
	initialImage,
	setProfileImageData,
}: ImgInputProps) {
	const defaultImage = "/images/character01.png";
	const imgInputRef = useRef<HTMLInputElement>(null);
	const [profileImage, setProfileImage] = useState<string>(
		initialImage || defaultImage,
	);

	useEffect(() => {
		if (initialImage) {
			setProfileImage(initialImage);
		}
	}, [initialImage]);

	const handleImageClick = () => {
		imgInputRef.current?.click();
	};
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] as File;
		if (file) {
			getImgPreview(file, setProfileImage, setProfileImageData);
		}
	};
	return (
		<div className="bg-sub-gray3 w-[200px] h-[200px] relative m-auto rounded-full">
			<Input
				id={id}
				type="file"
				accept="image/*"
				style={{ display: "none" }}
				onChange={handleFileChange}
			/>
			<label
				htmlFor={id}
				onClick={handleImageClick}
				className="w-[100%] h-[100%] absolute z-50"
			></label>
			<div className="">
				{profileImage ? (
					<Image
						src={profileImage}
						alt="사용자 프로필"
						fill
						className="relative object-cover rounded-full"
					/>
				) : (
					<ImageWithDefault
						src={profileImage}
						defaultSrc={defaultImage}
						alt="사용자 프로필"
						onClick={handleImageClick}
						className="relative object-cover rounded-full"
					/>
				)}
			</div>
		</div>
	);
}
