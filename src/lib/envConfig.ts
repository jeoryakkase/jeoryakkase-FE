// eslint-disable-next-line import/prefer-default-export
export const envConfig = {
	BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
	KAKAO_RESTAPI_KEY: process.env.NEXT_PUBLIC_KAKAO_RESTAPI_KEY!,
	KAKAO_REDIRECT_URI: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!,
	GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
	GOOGLE_REDIRECT_URI: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI!,
};