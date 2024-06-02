import UserInfoGoal from "@containers/userInfo/userInfoGoal";

const UserInfoGoalPage = () => {
	return (
		<section className="w-full m-auto ">
			<h1 className="font-bold text-xxxl  mb-[30px]">진행중인 목표</h1>
			<UserInfoGoal />
		</section>
	);
};

export default UserInfoGoalPage;
