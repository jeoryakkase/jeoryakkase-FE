"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import showToast from "@lib/toastConfig";
import loginQueryOption from "@services/login";
import { useQuery } from "@tanstack/react-query";

const GooleLogin = () => {
	const router = useRouter();
	if (typeof window === "undefined") {
		return <>Loading</>;
	}

	const params = new URLSearchParams(window.location.search);
	const code = params.get("code");
	console.log("params", params);
	console.log("code", code);
	if (!code) {
		return <>Loading</>;
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data } = useQuery(loginQueryOption.getGoogleAuthToken({ code }));
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		if (data) {
			// signIn("social-credentials", {
			// 	accessToken: data.accessToken,
			// 	refreshToken: data.refreshToken,
			// });
			// const accessToken = data.headers.authorization;
			// const refreshToken = data.data;
			// setAccessToken(accessToken);
			// setRefreshToken(refreshToken);
			console.log(data);
			// signIn("credentials", {
			// 	data,
			// });
			showToast({
				type: "success",
				message: "로그인이 완료되었습니다.",
			});
			router.replace("/");
		}
	}, [data]);

	return <>Loading</>;
};

export default GooleLogin;
