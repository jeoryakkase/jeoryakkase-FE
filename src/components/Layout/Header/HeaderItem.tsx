import Link from "next/link";

import styles from "../layout.module.css";

interface HeaderItemProps {
	label: string;
	showTooltip?: boolean;
	href: string;
}

const HeaderItem = ({ label, href, showTooltip }: HeaderItemProps) => {
	return (
		<li className={`${styles.navitem} group`}>
			<Link href={href}>{label}</Link>
			{showTooltip && (
				<div className={`${styles.tooltip} opacity-0 group-hover:opacity-100`}>
					<Link href="/vote">허불허</Link>
					<Link href="/tips">짠팁</Link>
					<Link href="/fame">소금 모아 태산</Link>
				</div>
			)}
		</li>
	);
};

export default HeaderItem;
