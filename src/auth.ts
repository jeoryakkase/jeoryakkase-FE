import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

export const {
	handlers,
	signIn,
	signOut,
	auth,
	unstable_update: update, // Beta!
} = NextAuth({
	providers: [
		Credentials({
			authorize: async (credentials) => {
				try {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`,
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: credentials.email,
								password: credentials.password,
							}),
						},
					);
					console.log(
						"loginData",
						JSON.stringify({
							email: credentials.email,
							password: credentials.password,
						}),
					);
					const data = await res.json();

					if (res.ok && !data.error) {
						const authorizationHeader = res.headers.get("Authorization");
						const user = data;

						if (user) {
							user.accessToken = authorizationHeader;
							return user;
						}

						return null;
					}
					throw new Error(data.error || "로그인에 실패했습니다.");
				} catch (error) {
					console.error("Authorize error:", error);
					throw new Error(error.message || "로그인에 실패했습니다.");
				}
			},
		}),
		Google,
		Kakao,
		// ...
	],
	session: {
		strategy: "jwt", // JSON Web Token 사용
		maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
	},
	pages: {
		signIn: "/login", // Default: '/auth/signin'
	},
	callbacks: {
		signIn: async () => {
			return true;
		},
		jwt: async ({ token, user }) => {
			return token;
		},
		session: async ({ session, token }) => {
			return session;
		},
		redirect: async ({ url, baseUrl }) => {
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			if (url) {
				const { search, origin } = new URL(url);
				const callbackUrl = new URLSearchParams(search).get("callbackUrl");
				if (callbackUrl)
					return callbackUrl.startsWith("/")
						? `${baseUrl}${callbackUrl}`
						: callbackUrl;
				if (origin === baseUrl) return url;
			}
			return baseUrl;
		},
	},
});
