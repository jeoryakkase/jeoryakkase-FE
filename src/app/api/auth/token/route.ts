import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
		cookieName: "next-auth.session-token",
	});
	if (!token) {
		return NextResponse.json({ error: "No token found" }, { status: 401 });
	}

	return NextResponse.json(token);
}
