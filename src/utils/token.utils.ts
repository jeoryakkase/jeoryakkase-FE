import { getSession } from "next-auth/react";

const getAccessToken = async () => {
	const session = await getSession();
	if (session && session.user.accessToken) {
		return session.user.accessToken as string;
	}
	return null;
};

export default getAccessToken;
