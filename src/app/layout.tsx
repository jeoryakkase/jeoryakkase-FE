import type { ReactNode } from "react";
import pretandard from "@styles/fonts";
import Layout from "@components/Layout";
import "../app/globals.css";

interface LayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="ko" className={pretandard.variable}>
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
