import NextAuth, { Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

import showToast from "@lib/toastConfig";
import useAuthStore, { UserStoreData } from "@stores/Auth/useUserAuth";

declare module "next-auth" {
	interface User {
		userStoreData?: UserStoreData;
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
		accessToken: string | undefined;
		expires_at: number;
		refreshToken: string | undefined;
		user: User | AdapterUser;
		account: Account | null;
		error?: "RefreshAccessTokenError" | undefined;
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
					// 스토어 저장
					useAuthStore.getState().login(user.user);
					if (user) {
						user.accessToken = authorizationHeader;
						return user;
					}
					console.log("반환 user : ", user);

					showToast({ type: "success", message: "로그인이 완료되었습니다." });
					return null;
				} catch (error) {
					console.error("Authorize error:", error);
					showToast({ type: "error", message: "로그인에 실패했습니다." });
					throw new Error("User not found.");
				}
			},
		}),

		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
			// 구글은 refresh_token을 위해 access_type: "offline"이 필요
			authorization: {
				params: {
					scope: "openid email profile",
					access_type: "offline",
					prompt: "consent",
				},
			},
		}),
		KakaoProvider({
			clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
			clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
			authorization: {
				params: {
					scope: "profile_nickname profile_image account_email",
					access_type: "offline",
					prompt: "consent",
				},
			},
		}),
	],
	secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user, account }) {
			socialToken(account!);
			console.log("accoun provider : ", account?.provider);
			console.log("accoun access_token : ", account?.access_token);
			console.log("Account : ", account);
			console.log("시작 token :", token);
			console.log("시작 user :", user);
			try {
				console.log("조건 user", user);
				console.log("조건 account", account);
				if (user) {
					console.log("if user", user);
					return {
						...token,
						accessToken: user.accessToken! || account?.access_token,
						expires_at: Date.now() + 36 * 1000!,
						refreshToken: user.refreshToken! || account?.refresh_token,
						user,
					};
				}

				console.log("일반 user :", user);

				console.log("token 리프래쉬 후 ", token);
				const nowTime = Math.round(Date.now() / 1000);
				// 토큰 만료 10분전인지 계산
				const shouldRefreshTime =
					(token.expires_at as number) - 10 * 60 - nowTime;
				// 토큰이 만료되지 않았을때는 원래사용하던 토큰을 반환
				if (shouldRefreshTime > 0) {
					return token;
				}
				showToast({ type: "success", message: "로그인이 완료되었습니다." });
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
				// 사용자의 닉네임을 추출하여 스토어에 저장

				return session;
			}
			console.log("session 저장된거니", session);
			return session;
		},
		async redirect({ url, baseUrl }) {
			// 로그인 성공 시 홈으로 리디렉션
			if (url.startsWith(baseUrl) || url.startsWith("/login")) {
				return baseUrl;
			}
			return baseUrl;
		},
	},

	pages: {
		signIn: "/login",
		newUser: "/signup",
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
// 백엔드 소셜 연동
async function socialToken(account: Account) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/${account.provider}/auth`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${account.access_token}`,
				},
				body: JSON.stringify({
					refreshToken: account.refresh_token,
				}),
			},
		);
		console.log(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/${account.provider}/auth`,
		);
		console.log("accessToken", account.access_token);
		console.log("refreshToken", account.refresh_token);

		// 스토어 저장 name,badgeDesc,badgeImage
		// useAuthStore.getState().login(res);
		if (!res.ok) {
			throw new Error(`API 호출 실패: ${res.status}`);
		}

		const data = await res.json();
		console.log("API 응답:", data);
	} catch (error) {
		console.error("백엔드 소셜 연동 중 에러 발생:", error);
	}
}
export { handler as GET, handler as POST };
