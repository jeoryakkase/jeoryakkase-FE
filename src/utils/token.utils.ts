import { getSession } from "next-auth/react";

export const getAccessToken = async () => {
	const session = await getSession();
	if (session && session.user.access_token) {
		return session.user.access_token as string;
	}
	return null;
};

export const getRefreshToken = async () => {
	const session = await getSession();
	if (session && session.user.refreshToken) {
		return session.user.refreshToken as string;
	}
	return null;
};
