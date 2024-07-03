// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(req: NextRequest) {
// 	const token = await getToken({
// 		req,
// 		secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
// 	});
// 	const { pathname } = req.nextUrl;

// 	// 인증이 필요한 페이지 목록
// 	const protectedPaths = ["/userinfo", "/challenge/write", "/saltern/write"];

// 	const isAccessingProtectedPath = protectedPaths.some((path) =>
// 		pathname.startsWith(path),
// 	);

// 	if (!token && isAccessingProtectedPath && pathname !== "/login") {
// 		const url = req.nextUrl.clone();
// 		url.pathname = "/login";
// 		return NextResponse.redirect(url);
// 	}

// 	return NextResponse.next();
// }

// // 미들웨어가 적용될 경로 설정
// export const config = {
// 	matcher: ["/userinfo", "/challenge/(.*)/record", "/saltern/write"],
// };
// export { auth as middleware } from "./auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "path-to-regexp";

import { getSession } from "./serverActions/auth"; // import { auth } from '@/auth'

const matchersForAuth = ["/userinfo", "/challenge/write", "/saltern/write"];

const middleware = async (request: NextRequest) => {
	if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
		return (await getSession()) // 세션 정보 확인
			? NextResponse.next()
			: NextResponse.redirect(new URL("/login", request.url));
		// : NextResponse.redirect(new URL(`/signin?callbackUrl=${request.url}`, request.url))
	}
	return NextResponse.next();
};

function isMatch(pathname: string, urls: string[]) {
	return urls.some((url) => !!match(url)(pathname));
}

export default middleware;
