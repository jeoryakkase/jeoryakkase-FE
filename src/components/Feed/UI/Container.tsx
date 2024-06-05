import { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return <div className="mx-auto p-4">{children}</div>;
};

export default Container;
