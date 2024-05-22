import styles from "../layout.module.css";

interface NavItemProps {
	label: string;
	showTooltip?: boolean;
}

const NavItem = ({ label, showTooltip }: NavItemProps) => {
	return (
		<li className={`${styles.navitem} group`}>
			<span className="ml-12">{label}</span>
			{showTooltip && (
				<div className={`${styles.tooltip} opacity-0 group-hover:opacity-100`}>
					<span>허불허</span>
					<span>짠팁</span>
					<span>소금 모아 태산</span>
				</div>
			)}
		</li>
	);
};

export default NavItem;
