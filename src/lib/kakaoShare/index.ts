import showToast from "@lib/toastConfig";

export const initializeKakao = () => {
	if (typeof window !== "undefined" && window.Kakao) {
		const { Kakao } = window;
		if (Kakao && !Kakao.isInitialized()) {
			Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
		}
	}
};

export const shareKakao = (url, description, title, img) => {
	if (typeof window !== "undefined" && window.Kakao && window.Kakao.Link) {
		const { Kakao } = window;

		Kakao.Link.sendDefault({
			objectType: "feed",
			content: {
				title,
				description,
				imageUrl: img,
				link: {
					mobileWebUrl: url,
					webUrl: url,
				},
			},
			buttons: [
				{
					title: "저략카세로 절약하기",
					link: {
						mobileWebUrl: url,
						webUrl: url,
					},
				},
			],
		});
	} else {
		showToast({
			type: "error",
			message: "Kakao SDK 초기화 실패 또는 정의되지 않음.",
		});
	}
};
