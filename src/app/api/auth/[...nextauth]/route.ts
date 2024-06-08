import { NextApiRequest, NextApiResponse } from "next";

import NextAuth from "next-auth";

import authOptions from "./authOptions"; // authOptions를 별도의 파일에서 정의하는 것이 좋습니다

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	// eslint-disable-next-line @typescript-eslint/return-await
	return await NextAuth(req, res, authOptions);
};

export {
	authHandler as GET,
	authHandler as POST,
	authHandler as PATCH,
	authHandler as PUT,
	authHandler as DELETE,
};
