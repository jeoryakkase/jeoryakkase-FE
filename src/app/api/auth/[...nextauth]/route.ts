import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

import showToast from "@lib/toastConfig";

declare module "next-auth" {
	interface User {
		accessToken?: string;
		expires_at?: number;
		refreshToken?: string;
	}

	interface Session {
		accessToken?: string;
		expiresAt?: number;
		refreshToken?: string;
		user: User;
		error?: "RefreshTokenError";
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		accessToken: string;
		expires_at: number;
		refreshToken: string;
		user: User;
		error?: "RefreshAccessTokenError";
	}
}
const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				username: {
					label: "이메일",
					type: "text",
					placeholder: "이메일을 입력해주세요.",
				},
				password: {
					label: "비밀번호",
					type: "password",
					placeholder: "비밀번호를 입력해주세요.",
				},
			},
			async authorize(credentials) {
				try {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: credentials?.username,
								password: credentials?.password,
							}),
						},
					);
					const authorizationHeader = res.headers.get("Authorization");
					const user = await res.json();
					console.log("user", user);
					if (user) {
						user.accessToken = authorizationHeader;
						return user;
					}
					showToast({ type: "success", message: "로그인이 완료되었습니다." });
					return null;
				} catch (error) {
					console.error("Authorize error:", error);
					showToast({ type: "error", message: "로그인에 실패했습니다." });
					return null;
				}
			},
		}),

		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
			// 구글은 refresh_token을 위해 access_type: "offline"이 필요
			authorization: {
				params: { access_type: "offline", prompt: "consent" },
			},
		}),
		KakaoProvider({
			clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
			authorization: {
				params: { access_type: "offline", prompt: "consent" },
			},
		}),
	],
	secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			console.log("시작 token :", token);
			try {
				// 일반 로그인
				if (user) {
					console.log("if user", user);
					return {
						...token,
						accessToken: user.accessToken!,
						expires_at: Date.now() + 36 * 1000!,
						refreshToken: user.refreshToken!,
						user,
					};
				}
				console.log("일반 user :", user);
				// let response: Response;
				// if (token?.provider === "google") {
				// 	response = await fetch("https://oauth2.googleapis.com/token", {
				// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
				// 		body: new URLSearchParams({
				// 			client_id: process.env.GOOGLE_CLIENT_ID!,
				// 			client_secret: process.env.GOOGLE_CLIENT_SECRET!,
				// 			grant_type: "refresh_token",
				// 			refresh_token: token.refreshToken!,
				// 		}),
				// 		method: "POST",
				// 	});
				// } else if (token?.provider === "kakao") {
				// 	response = await fetch("https://kauth.kakao.com/oauth/token", {
				// 		headers: { "Content-Type": "application/x-www-form-urlencoded" },
				// 		body: new URLSearchParams({
				// 			client_id: process.env.KAKAO_CLIENT_ID!,
				// 			client_secret: process.env.KAKAO_CLIENT_SECRET!,
				// 			grant_type: "refresh_token",
				// 			refresh_token: token.refreshToken!,
				// 		}),
				// 		method: "POST",
				// 	});
				// }

				// const responseTokens = await response!.json();

				console.log("token 리프래쉬 후 ", token);
				const nowTime = Math.round(Date.now() / 1000);
				// 토큰 만료 10분전인지 계산
				const shouldRefreshTime =
					(token.expires_at as number) - 10 * 60 - nowTime;
				// 토큰이 만료되지 않았을때는 원래사용하던 토큰을 반환
				if (shouldRefreshTime > 0) {
					return token;
				}
				// 만료 10분전부터 토큰 리프레시
				return await refreshAccessToken(token);
			} catch (error) {
				console.error("token 에러", error);
				throw error;
			}
		},

		async session({ session, token }) {
			if (token.error === "RefreshAccessTokenError") {
				session.error = "RefreshTokenError";
			} else if (token) {
				session.user = token.user as User;
				session.accessToken = token.accessToken;
				session.refreshToken = token.refreshToken;
				session.expiresAt = token.expires_at;
				console.log("session 마지막", session);
				return session;
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			if (url.startsWith(baseUrl)) {
				return url;
			}
			return baseUrl;
		},
	},

	pages: {
		signIn: "/login",
	},
});

// 리프레시 토큰으로 액세스 토큰 갱신하기
async function refreshAccessToken(
	token: import("next-auth/jwt").JWT,
	retryCount = 1,
): Promise<import("next-auth/jwt").JWT> {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/token`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					refreshToken: token.refreshToken,
				}),
			},
		);

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			accessToken: refreshedTokens.accessToken,
			expires_at: Date.now() + refreshedTokens.expires_in * 1000,
			refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
		};
	} catch (error) {
		// 액세스 토큰 갱신 에러 시 2번까지는 시도하도록 retry 추가
		if (retryCount < 3) {
			console.log(`액세스 토큰 (${retryCount + 1})번째 갱신 재시도 중 `);
			return refreshAccessToken(token, retryCount + 1);
		}

		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

export { handler as GET, handler as POST };
