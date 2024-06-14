"use client";

import { SessionProvider } from "next-auth/react";

interface Props {
	children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
	// 리프
	const REFRESH_AGE = 3600 * 24 * 14;
	return (
		<SessionProvider refetchInterval={REFRESH_AGE} refetchOnWindowFocus>
			{children}
		</SessionProvider>
	);
};

export default AuthProvider;
