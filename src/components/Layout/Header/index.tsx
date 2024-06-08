"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "public/images/logo.png";

import UserIcon from "@components/icons/UserIcon";

import HeaderItem from "./HeaderItem";
import styles from "../layout.module.css";

const Header = () => {
	return (
		<header className={`${styles.header} w-[100dvw] h-[60px] `}>
			<div className="flex justify-between w-[85rem] h-full m-auto">
				<Link href="/">
					<Image src={logo} alt="logo" width={55} />
				</Link>
				<ul className="text-black flex gap-[30px]">
					<HeaderItem label="홈" href="/" />
					<HeaderItem label="짠맛 내공 쌓기" href="/userinfo" />
					<HeaderItem label="챌린지" href="/challenge" />
					<HeaderItem label="염전" showTooltip href="/saltern" />
				</ul>
				<div className="flex items-center gap-[30px]">
					<Link
						href="/signup"
						className={`${styles.headerbutton} bg-white-500 hover:text-main-darkblue`}
					>
						회원가입
					</Link>
					<Link
						href="/login"
						className={`${styles.headerbutton} bg-white-500 hover:text-main-darkblue`}
					>
						Login
					</Link>
					<Link href="/login">
						<UserIcon
							className={`${styles.headericon} bg-white-500 hover:text-main-darkblue cursor-pointer`}
						/>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
