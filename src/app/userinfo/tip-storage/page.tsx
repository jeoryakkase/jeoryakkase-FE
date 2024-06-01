import UserInfoTipStorage from "@containers/userInfo/userInfoTipStorage";

const UserInfoTipStoragePage = () => {
	return (
		<section className={`w-full m-auto `}>
			<h1 className="font-bold text-xxxl  mb-[30px]">짠팁 보관함</h1>
			<UserInfoTipStorage />
		</section>
	);
};

export default UserInfoTipStoragePage;
