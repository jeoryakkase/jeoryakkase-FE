"use client";
import showToast from "@lib/toastConfig";
import userQueryOption from "@services/api/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const KakaoLogin = () => {
	const router = useRouter();
	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	console.log("params", params);
	console.log("code", code);
	if (!code) {
		return <>Loading</>;
	}

	const { data } = useQuery(userQueryOption.getKakaoAuthToken({ code }));
	if (data) {
		const accessToken = data.headers.authorization;
		const refreshToken = data.data;
		// setAccessToken(accessToken);
		// setRefreshToken(refreshToken);
		console.log(accessToken);
		showToast({
			type: "success",
			message: "로그인이 완료되었습니다.",
		});
		router.replace("/");
	}
	return <>Loading</>;
};

export default KakaoLogin;
