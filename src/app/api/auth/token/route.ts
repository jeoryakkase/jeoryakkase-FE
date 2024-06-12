import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
	// const secret = envConfig.NEXTAUTH_SECRET;
	// if (!secret) {
	// 	console.error("NEXTAUTH_SECRET is not set");
	// 	return NextResponse.json(
	// 		{ error: "Internal server error" },
	// 		{ status: 500 },
	// 	);
	// }

	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
		cookieName: "next-auth.session-token",
	});
	console.log("Request cookies:", request.cookies.getAll());
	console.log("token:", token);
	if (!token) {
		return NextResponse.json({ error: "No token found" }, { status: 401 });
	}

	return NextResponse.json(token);
}
