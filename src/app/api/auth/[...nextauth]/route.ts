import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import KakaoProvider from "next-auth/providers/kakao";
declare module "next-auth" {
	interface User {
		access_token?: string;
		expires_at?: number;
		refresh_token?: string;
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
		access_token: string;
		expires_at: number;
		refresh_token: string;
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

					const user = await res.json();
					if (user) {
						return user;
					}
					return null;
				} catch (error) {
					console.error("Authorize error:", error);
					return null;
				}
			},
		}),

		// GoogleProvider({
		// 	clientId: envConfig.GOOGLE_CLIENT_ID,
		// 	clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
		// 	// 구글은 refresh_token을 위해 access_type: "offline"이 필요
		// 	authorization: {
		// 		params: { access_type: "offline", prompt: "consent" },
		// 	},
		// }),
		// KakaoProvider({
		// 	clientId: envConfig.KAKAO_CLIENT_ID,
		// 	clientSecret: envConfig.KAKAO_CLIENT_SECRET,
		// }),
	],
	secret: process.env.NEXTAUTH_SECRET,
	cookies: {
		sessionToken: {
			name: `next-auth.session-token`,
			options: {
				domain: "localhost",
				httpOnly: true,
				sameSite: "Lax",
				path: "/",
				secure: false,
			},
		},
	},
	callbacks: {
		async jwt({ token, user }) {
			try {
				if (user) {
					token.access_token = user.access_token!;
					token.refresh_token = user.refresh_token!;
					token.expires_at = Date.now() + 36 * 1000;
					return token;
				}

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
				// session.user = token.user as User;
				session.accessToken = token.access_token;
				session.expiresAt = token.expires_at;
				session.refreshToken = token.refresh_token;
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
					refresh_token: token.refresh_token,
				}),
			},
		);

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			access_token: refreshedTokens.access_token,
			expires_at: Date.now() + refreshedTokens.expires_in * 1000,
			refresh_token: refreshedTokens.refresh_token ?? token.refresh_token,
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
