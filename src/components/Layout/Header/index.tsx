import UserIcon from "public/svgs/UserIcon";
import styles from "../layout.module.css";

const Header = () => {
	return (
		<header className={`${styles.header} w-100dvw h-57`}>
			<button
				className={`${styles.headerbutton} bg-white-500 hover:text-main-darkblue`}
			>
				회원가입
			</button>
			<button
				className={`${styles.headerbutton} bg-white-500 hover:text-main-darkblue`}
			>
				Login
			</button>
			<div
				className={`${styles.headericon} bg-white-500 hover:text-main-darkblue`}
			>
				<UserIcon />
			</div>
		</header>
	);
};

export default Header;
