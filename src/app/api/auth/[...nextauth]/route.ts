import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

// JWT 타입 확장
interface ExtendedJWT extends JWT {
	accessToken?: string;
	refreshToken?: string;
}

// Session 타입 확장
interface ExtendedSession extends Session {
	accessToken?: string;
	refreshToken?: string;
}

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			// 일반 로그인 제공자 설정
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			// api호출 자리 예시로 일단 작성
			async authorize(credentials) {
				// 백엔드 API 호출
				const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" },
				});
				const user = await res.json();

				if (res.ok && user) {
					return user;
				}
				return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			profile(profile) {
				return {
					// id는 필수, 데이터 수정
					id: profile.id,
					name: profile.kakao_account?.profile.nickname,
					email: profile.kakao_account?.email,
					image: profile.kakao_account?.profile.profile_image_url,
				};
			},
		}),
		KakaoProvider({
			clientId: process.env.KAKAO_CLIENT_ID as string,
			clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
			profile(profile) {
				return {
					// id는 필수, 데이터 수정
					id: profile.id,
					name: profile.kakao_account?.profile.nickname,
					email: profile.kakao_account?.email,
					image: profile.kakao_account?.profile.profile_image_url,
				};
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
	},
	callbacks: {
		// user id가 필요하면  user.id로 추가 가능
		async jwt({ token, account }) {
			const extendedToken = { ...token } as ExtendedJWT;
			if (account) {
				extendedToken.accessToken = account.access_token as string;
				extendedToken.refreshToken = account.refreshToken as string;
			}
			return token;
		},
		// 세션 콜백으로 useSession()을 사용하여 클라이언트에서 데이터 접근
		async session({ session, token }) {
			const extendedSession = { ...session } as ExtendedSession;
			extendedSession.accessToken = (token as ExtendedJWT).accessToken;
			extendedSession.refreshToken = (token as ExtendedJWT).refreshToken;
			return session;
		},
	},
});

export { handler as GET, handler as POST };
