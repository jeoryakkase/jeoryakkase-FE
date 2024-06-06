import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { envConfig } from "@lib/envConfig";
// eslint-disable-next-line import/prefer-default-export
export async function GET(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: envConfig.GOOGLE_CLIENT_ID,
	});

	if (!token) {
		return NextResponse.json({ error: "No token found" }, { status: 401 });
	}

	return NextResponse.json(token);
}
