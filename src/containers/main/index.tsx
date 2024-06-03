// import showToast from "@lib/toastConfig";
// import { useQuery } from "@tanstack/react-query";

"use client";

import { useEffect } from "react";

import useGoalStore from "@stores/Goal/goalStore";
import useUserChallenge from "@stores/UserChallenge/useUserChallenge";

import { dummyChallenges, dummyGoals } from "./dummy";
import MainView from "./UI";

const Main = () => {
	const { setGoals } = useGoalStore();
	const { setChallenges } = useUserChallenge();
	// mutation 감싼 useQuery 사용
	useEffect(() => {
		setGoals(dummyGoals);
		setChallenges(dummyChallenges);
	}, []);

	// if (isLoading) return <div>Loading...</div>;
	// if (error)
	// 	return showToast({
	// 		type: "error",
	// 		message: "메인 페이지 데이터를 가져오는데 실패했습니다.",
	// 	});

	return <MainView />;
};

export default Main;
