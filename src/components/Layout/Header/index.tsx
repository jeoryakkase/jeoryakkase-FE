"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import logo from "public/images/logo.png";

import UserIcon from "@components/icons/UserIcon";
import useAuthStore from "@stores/Auth/useUserAuth";

import HeaderItem from "./HeaderItem";
import styles from "../layout.module.css";

const Header = () => {
	const { data: session } = useSession();
	const { logout } = useAuthStore();
	const handleLogout = async () => {
		logout();
		await signOut({ callbackUrl: "/" });
	};
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
					{session?.user ? (
						<button
							type="button"
							onClick={handleLogout}
							className={`${styles.headerbutton} bg-white-500 hover:text-main-darkblue`}
						>
							Logout
						</button>
					) : (
						<>
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
						</>
					)}
					<Link href={session?.user ? "/userinfo" : "/login"}>
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
