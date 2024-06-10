import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
	const { pathname } = req.nextUrl;

	// 인증이 필요한 페이지 목록
	const protectedPaths = ["/userinfo", "/challenge/write", "/saltern/write"];

	const isAccessingProtectedPath = protectedPaths.some((path) =>
		pathname.startsWith(path),
	);

	if (!token && isAccessingProtectedPath && pathname !== "/login") {
		const url = req.nextUrl.clone();
		url.pathname = "/login";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
	matcher: ["/userinfo", "/challenge/(.*)/record", "/saltern/write"],
};
