import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

interface Token {
	accessToken?: string;
	refreshToken?: string;
}
// 세션에서 액세스 토큰 가져오기
export const getAccessToken = async (
	req: NextRequest,
): Promise<string | null> => {
	const token = (await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET,
	})) as Token;
	return token?.accessToken || null;
};

// 세션에서 리프레시 토큰 가져오기
export const getRefreshToken = async (
	req: NextRequest,
): Promise<string | null> => {
	const token = (await getToken({
		req,
		secret: process.env.NEXTAUTH_SECRET,
	})) as Token;
	return token?.refreshToken || null;
};
