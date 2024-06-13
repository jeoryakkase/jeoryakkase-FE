interface Props {
	children: React.ReactNode;
	postmodal: React.ReactNode;
	giveupmodal: React.ReactNode;
}
const NaegongLayout = ({ children, postmodal, giveupmodal }: Props) => {
	return (
		<div>
			{children}
			{postmodal}
			{giveupmodal}
		</div>
	);
};

export default NaegongLayout;
