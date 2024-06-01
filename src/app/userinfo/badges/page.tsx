import UserInfoBadges from "@containers/userInfo/userInfoBadges";

const UserInfoBadgesPage = () => {
	return (
		<section className={`w-full m-auto `}>
			<h1 className="font-bold text-xxxl  mb-[30px]">뱃지 컬렉션</h1>
			<UserInfoBadges />
		</section>
	);
};

export default UserInfoBadgesPage;
