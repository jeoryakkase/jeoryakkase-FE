interface Props {
	children: React.ReactNode;
	goalmodal: React.ReactNode;
}
const UserInfoLayout = ({ children, goalmodal }: Props) => {
	return (
		<div>
			{children}
			{goalmodal}
		</div>
	);
};

export default UserInfoLayout;
