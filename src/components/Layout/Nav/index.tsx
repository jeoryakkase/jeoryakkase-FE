import NavItem from "./NavItem";

const Nav = () => {
	return (
		<nav className="bg-white text-black w-full h-97 p-4 flex justify-end mb-40">
			<ul className="flex">
				<NavItem label="홈" />
				<NavItem label="짠맛 내공 쌓기" />
				<NavItem label="챌린지" />
				<NavItem label="염전" showTooltip={true} />
			</ul>
		</nav>
	);
};

export default Nav;
