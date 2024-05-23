import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className="mx-auto max-w-[85rem] w-full ">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
