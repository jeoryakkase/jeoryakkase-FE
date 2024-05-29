// import showToast from "@lib/toastConfig";
// import { useQuery } from "@tanstack/react-query";

"use client";

import { useEffect } from "react";

import { useUserGoal } from "@stores/Goal/GoalContext";

import { dummyGoals } from "./dummy";
import MainView from "./UI";

const MainPageWithData = () => {
	const { setGoals } = useUserGoal();

	// mutation 감싼 useQuery 사용
	useEffect(() => {
		setGoals(dummyGoals);
	}, [setGoals]);

	// if (isLoading) return <div>Loading...</div>;
	// if (error)
	// 	return showToast({
	// 		type: "error",
	// 		message: "메인 페이지 데이터를 가져오는데 실패했습니다.",
	// 	});

	return <MainView />;
};

export default MainPageWithData;
