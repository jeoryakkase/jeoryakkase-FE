import type { ReactNode } from "react";
import pretandard from "@styles/fonts";
import Layout from "@components/Layout";
import Providers from "@lib/QueryProviders";
import "../app/globals.css";

interface LayoutProps {
	children: ReactNode;
}
export const metadata = {
	icons: {
		icon: "/images/logo.png",
	},
};
export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="ko" className={pretandard.variable}>
			<body className="h-[100dvh] flex flex-col justify-between">
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
