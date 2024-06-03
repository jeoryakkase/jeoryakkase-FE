"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Input } from "@components/shadcn/ui/Input";
import getImgPreview from "@utils/getImgPreview";

import ImageWithDefault from "../ImageWithDefault";

interface ImgInputProps {
	id?: string;
	initialImage?: string;
	setProfileImageData?: (file: File) => void;
	viewOnly?: boolean;
}

const ImgInput = ({
	id,
	initialImage,
	setProfileImageData,
	viewOnly = false,
}: ImgInputProps) => {
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

	const handleImageClick = useCallback(() => {
		imgInputRef.current?.click();
	}, []);

	const handleFileChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (viewOnly) return;
			const file = event.target.files?.[0] as File;
			if (file) {
				if (!file.type.startsWith("image/")) {
					console.error("이미지 파일을 선택해주세요.");
					return;
				}
				getImgPreview(file, setProfileImage, setProfileImageData || (() => {}));
			}
		},
		[setProfileImage, setProfileImageData, viewOnly],
	);

	return (
		<div className="bg-sub-gray3 w-[200px] h-[200px] relative m-auto rounded-full cursor-pointer">
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
			/>
			<div className="">
				{profileImage ? (
					<Image
						src={profileImage}
						alt="사용자 프로필"
						width={0}
						height={0}
						sizes="100vw"
						className="relative object-cover rounded-full w-[100%] "
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
};
export default ImgInput;
