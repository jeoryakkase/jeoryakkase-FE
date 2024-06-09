import { NextAuthOptions, User } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

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
			async authorize(credentials, req) {
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
					console.log("user", user);
					if (user) {
						return user;
					} else {
						return null;
					}
				} catch (error) {
					console.error("Authorize error:", error);
					return null;
				}
			},
		}),
	],
	secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.access_token = user.access_token!;
				token.expires_at = user.expires_at!;
				token.refresh_token = user.refresh_token!;
				token.user = user;
			}
			return token;
		},
		async session({ session, token }) {
			if (token.user) {
				// eslint-disable-next-line no-param-reassign
				session.user = token.user as User;
			}

			// token 객체에서 사용자 정보를 세션에 복사합니다.
			session.accessToken = token.access_token;
			session.expiresAt = token.expires_at;
			session.refreshToken = token.refresh_token;
			return session;
		},
		async redirect() {
			return `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`;
		},
	},

	pages: {
		signIn: "/login",
	},
};
export default authOptions;
