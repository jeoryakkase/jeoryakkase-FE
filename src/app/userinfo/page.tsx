import UserInfo from "@containers/userInfo";

const UserInfoPage = () => {
	return (
		<section className={`max-w-[40rem] w-full m-auto `}>
			<h1 className="font-bold text-xxxl  mb-[30px] text-center">MyPage</h1>
			<UserInfo />
		</section>
	);
};

export default UserInfoPage;
