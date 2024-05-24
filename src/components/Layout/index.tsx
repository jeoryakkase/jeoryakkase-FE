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
			<div className="mx-auto max-w-[85rem] w-full ">
				<main>{children}</main>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
