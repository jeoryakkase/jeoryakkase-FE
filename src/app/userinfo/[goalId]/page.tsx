"use client";

import UserInfoGoal from "@containers/userInfo/userInfoGoal";
import Link from "next/link";
import { useParams } from "next/navigation";

const UserInfoGoalPage = () => {
	const { goalId } = useParams();
	return (
		<section className="w-full m-auto ">
			<h1 className="font-bold text-xxxl  mb-[30px]">진행중인 목표</h1>
			<UserInfoGoal />
			<Link href={`${goalId}/modal`} className="self-end">
				더 보기
			</Link>
		</section>
	);
};

export default UserInfoGoalPage;
