import type { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@components/Layout";
import AuthProvider from "@lib/authProvider";
import KakaoScript from "@lib/kakaoShare/KakaoScript";
import QueryProviders from "@lib/QueryProviders";
import pretandard from "@styles/fonts";

import "./globals.css";

interface LayoutProps {
	children: ReactNode;
}

declare global {
	interface Window {
		Kakao: any;
	}
}

export const metadata = {
	title: "jeoryakkase ",
	description: "절약을 위한 소셜 서비스 입니다",
	icons: {
		icon: "/images/logo.png",
	},
};
const RootLayout = ({ children }: LayoutProps) => {
	return (
		<html lang="ko" className={pretandard.variable}>
			<body className="h-[100dvh] flex flex-col justify-between">
				<AuthProvider>
					<QueryProviders>
						<Layout>{children}</Layout>
					</QueryProviders>
				</AuthProvider>
				<KakaoScript />
			</body>
		</html>
	);
};

export default RootLayout;
