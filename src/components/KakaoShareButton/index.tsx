"use client";

import { useEffect } from "react";

import KakaoLogo from "@assets/svgs/KakaoLogo";

type KakaoShareButtonProps = {
	description: string;
};

const KakaoShareButton = ({ description }: KakaoShareButtonProps) => {
	const shareUrl = typeof window !== "undefined" ? window.location.href : "";

	useEffect(() => {
		if (typeof window !== "undefined") {
			const { Kakao } = window;

			if (!Kakao.isInitialized()) {
				Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
			}
		}
	}, []);

	const handleShare = () => {
		const { Kakao } = window;

		Kakao.Share.sendDefault({
			objectType: "text",
			text: description,
			link: {
				mobileWebUrl: shareUrl,
				webUrl: shareUrl,
			},
		});
	};

	return <KakaoLogo onClick={handleShare} />;
};

export default KakaoShareButton;
