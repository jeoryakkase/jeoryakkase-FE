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
				console.log("credentials", credentials);
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
	secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return {
					...token,
					access_token: user.access_token!,
					expires_at: user.expires_at!,
					refresh_token: user.refresh_token!,
					user,
				};
			}
			return token;
		},
		async session({ session, token }) {
			if (token.user) {
				// eslint-disable-next-line no-param-reassign
				session.user = token.user as User;
			}
			console.log("session", session);
			return session;
		},
		async redirect() {
			return `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`;
		},
	},

	pages: {
		signIn: "/login",
	},
});
export { handler as GET, handler as POST };
