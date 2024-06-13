import { ReactNode } from "react";

import SalternNav from "@containers/saltern/UI/Layout";

interface SalternLayoutProps {
	children: ReactNode;
}

const SalternLayout = ({ children }: SalternLayoutProps) => {
	return (
		<>
			<SalternNav />
			{children}
		</>
	);
};

export default SalternLayout;
