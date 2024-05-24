import type { ReactNode } from "react";
import pretandard from "@styles/fonts";
import Layout from "@components/Layout";
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
			<body className="h-[85dvh] flex flex-col gap-[50px] justify-between">
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
