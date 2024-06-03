interface ContainerProps {
	title?: string;
	children: React.ReactNode;
}

const ModalContainer = ({ title, children, ...props }: ContainerProps) => {
	return (
		<div className="" {...props}>
			<label>{title}</label>
			<div className="relative">{children}</div>
		</div>
	);
};

export default ModalContainer;
