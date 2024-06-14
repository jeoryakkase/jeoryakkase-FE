"use client";

import {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import { Input } from "@components/shadcn/ui/Input";
import showToast from "@lib/toastConfig";
import getImgPreview from "@utils/getImgPreview";

import ModalContainer from "../ModalContainer";

interface ModalImgInputProps {
	title?: string;
	id?: string;
	initialImage?: string;
	setPreviewImageData?: (file: File) => void;
	viewOnly?: boolean;
}

const ModalImgInput = forwardRef<HTMLInputElement, ModalImgInputProps>(
	({ title, id, initialImage, setPreviewImageData, viewOnly = false }, ref) => {
		const defaultImage = "";
		const imgInputRef = useRef<HTMLInputElement>(null);
		const [previewImage, setPreviewImage] = useState<string | undefined>(
			initialImage || defaultImage,
		);

		useImperativeHandle(ref, () => imgInputRef.current!);

		useEffect(() => {
			if (initialImage) {
				setPreviewImage(initialImage);
			}
		}, [initialImage]);

		const handleImageClick = () => {
			imgInputRef.current?.click();
		};
		const handleFileChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				if (viewOnly) return;
				const file = event.target.files?.[0] as File;
				if (file) {
					if (!file.type.startsWith("image/")) {
						showToast({
							type: "error",
							message: "이미지 파일을 선택해주세요.",
						});
						return;
					}
					getImgPreview(
						file,
						setPreviewImage,
						setPreviewImageData || (() => {}),
					);
				}
			},
			[setPreviewImage, setPreviewImageData, viewOnly],
		);

		return (
			<ModalContainer title={title}>
				<div className="bg-sub-gray3 w-[200px] h-[200px] relative m-auto rounded-md cursor-pointer flex items-center justify-center">
					{!viewOnly && (
						<Input
							id={id}
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={handleFileChange}
							ref={imgInputRef}
						/>
					)}
					{!viewOnly && (
						<label
							htmlFor={id}
							className="w-[100%] h-[100%] absolute z-50 cursor-pointer"
						/>
					)}
					<div className="">
						{previewImage ? (
							<Image
								src={previewImage}
								alt="이미지"
								width={0}
								height={0}
								sizes="100vw"
								className="relative object-cover  rounded-md w-[100%] h-[200px]"
							/>
						) : (
							<FaPlus
								className="text-main-navy text-4xl"
								onClick={handleImageClick}
							/>
						)}
					</div>
				</div>
			</ModalContainer>
		);
	},
);

ModalImgInput.displayName = "ModalImgInput";

export default ModalImgInput;
