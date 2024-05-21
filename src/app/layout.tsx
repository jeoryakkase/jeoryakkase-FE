import type { ReactNode } from "react";
import Header from "../components/Layout/Header/Header";
import pretandard from "../styles/fonts";

interface LayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="ko" className={pretandard.variable}>
			<body className="px">{children}</body>
			<Header />
		</html>
	);
}
