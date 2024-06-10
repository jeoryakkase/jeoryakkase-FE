import { getSession } from "next-auth/react";

const getAccessToken = async () => {
	const session = await getSession();
	if (session && session.user.access_token) {
		return session.user.access_token as string;
	}
	console.log(session, "interceptor session 찍히냐");
	return null;
};

export default getAccessToken;
