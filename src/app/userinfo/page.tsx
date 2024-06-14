import Link from "next/link";

import UserInfo from "@containers/userInfo";

const UserInfoPage = () => {
	return (
		<section className="w-full m-auto ">
			<h1 className="font-bold text-xxxl  mb-[30px] text-center">MyPage</h1>
			<Link href="/userinfo/edit"> 회원정보 수정</Link>
			<UserInfo />
		</section>
	);
};

export default UserInfoPage;
