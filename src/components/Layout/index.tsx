import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className="mx-auto max-w-[85rem] w-full mt-10">
				<main>{children}</main>
			</div>
			<footer className="mt-10">
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
