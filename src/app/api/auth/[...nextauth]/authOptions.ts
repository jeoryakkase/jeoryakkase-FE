import { Account, NextAuthOptions, Profile, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

import { LoginFormType } from "@containers/login/UI/LeftForm/loginValidation";
import { envConfig } from "@lib/envConfig";
import postLogin from "@services/api/user/login";

declare module "next-auth" {
	interface Session {
		error?: "RefreshAccessTokenError";
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
const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
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
			async authorize(credentials: LoginFormType) {
				try {
					// axios를 사용하여 백엔드 API 호출
					const response = await postLogin(credentials);

					// 응답 데이터에서 사용자 정보를 가져옴
					const user = response.data;

					// 응답이 성공하고 사용자 정보가 있는 경우 사용자를 반환
					if (response.status === 200 && user) {
						return user;
					}
				} catch (error) {
					console.error("Error occurred while authorizing:", error);
				}

				// 기타 경우에는 null을 반환
				return null;
			},
		}),
		GoogleProvider({
			clientId: envConfig.GOOGLE_CLIENT_ID,
			clientSecret: envConfig.GOOGLE_CLIENT_SECRET,
			// 구글은 refresh_token을 위해 access_type: "offline"이 필요
			authorization: { params: { access_type: "offline", prompt: "consent" } },
		}),
		KakaoProvider({
			clientId: envConfig.KAKAO_CLIENT_ID,
			clientSecret: envConfig.KAKAO_CLIENT_SECRET,
		}),
	],
	secret: envConfig.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({
			token,
			account,
			profile,
		}: {
			token: JWT;
			account: Account | null;
			profile?: Profile | undefined;
		}) {
			if (account) {
				// 첫번째 로그인, access_token, refresh_token 저장, jwt 세부 정보
				// access_token, expires_at(access_token 만료기간), refresh_token, 그리고 사용자 프로필을 JWT에 저장합니다.
				const userProfile: User = {
					id: token.sub!,
					name: profile?.name ?? "",
					email: profile?.email ?? "",
					// image: token?.picture ?? "",
				};
				return {
					access_token: account.access_token,
					expires_at: Math.floor(
						Date.now() / 1000 + ((account.expires_in as number) ?? 3600),
					), // 기본적으로 1시간(3600초) 설정
					refresh_token: account.refresh_token,
					user: userProfile,
				};
			}
			if (Date.now() < token.expires_at! * 1000) {
				// access_token이 유효한 경우 JWT 반환
				return token;
			}
			// refresh_token이 없는 경우 에러
			if (!token.refresh_token) throw new Error("Missing refresh token");

			try {
				let response;
				let responseTokens;
				if (token.provider === "google") {
					response = await fetch("https://oauth2.googleapis.com/token", {
						headers: { "Content-Type": "application/x-www-form-urlencoded" },
						body: new URLSearchParams({
							client_id: envConfig.GOOGLE_CLIENT_ID,
							client_secret: envConfig.GOOGLE_CLIENT_SECRET,
							grant_type: "refresh_token",
							refresh_token: token.refresh_token!,
						}),
						method: "POST",
					});
				} else if (token.provider === "kakao") {
					response = await fetch("https://kauth.kakao.com/oauth/token", {
						headers: { "Content-Type": "application/x-www-form-urlencoded" },
						body: new URLSearchParams({
							client_id: envConfig.KAKAO_CLIENT_ID,
							client_secret: envConfig.KAKAO_CLIENT_SECRET,
							grant_type: "refresh_token",
							refresh_token: token.refresh_token!,
						}),
						method: "POST",
					});
				}

				console.log(response);
				// eslint-disable-next-line prefer-const
				responseTokens = await response.json();

				if (!response.ok) throw responseTokens;

				return {
					// 성공시 access_token과 expires_at 값을 반환
					// 이전 토큰속성 유지
					...token,
					access_token: responseTokens.access_token,
					expires_at: Math.floor(
						Date.now() / 1000 + (responseTokens.expires_in as number),
					),
					refresh_token: responseTokens.refresh_token ?? token.refresh_token,
				};
			} catch (error) {
				console.error("Error refreshing access token", error);
				// refresh_token 오류를 처리하기위해 클라이언트 측에서 사용 될 수 있음
				return { ...token, error: "RefreshAccessTokenError" as const };
			}
		},
		async session({ session, token }) {
			if (token.user) {
				// eslint-disable-next-line no-param-reassign
				session.user = token.user as User;
			}
			// token 객체에서 사용자 정보를 세션에 복사합니다.
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
};
export default authOptions;
