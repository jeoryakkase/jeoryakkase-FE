"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";

import UserInfoGoal from "@containers/userInfo/userInfoGoal";

const UserInfoGoalPage = () => {
	const goalId = useParams();
	return (
		<section className="w-full m-auto ">
			<h1 className="font-bold text-xxxl  mb-[30px]">인증 내역</h1>
			<UserInfoGoal />
			<div className="flex justify-end">
				<Link
					href={`userinfo/${Number(goalId)}/modal`}
					className="flex gap-[5px] items-center"
				>
					<div>인증 추가</div> <FaPlus />
				</Link>
			</div>
		</section>
	);
};

export default UserInfoGoalPage;
