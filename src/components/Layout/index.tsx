import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className="mx-auto max-w-screen-lg">
				<Nav mb-30 />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
