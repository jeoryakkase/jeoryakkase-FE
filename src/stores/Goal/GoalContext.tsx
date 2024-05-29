"use client";

import { createContext, ReactNode, useContext } from "react";

import showToast from "@lib/toastConfig";
import useGoalStore, { GoalState } from "@stores/Goal/useGoalStore";

const UserGoalContext = createContext<GoalState | undefined>(undefined);

export const UserGoalProvider = ({ children }: { children: ReactNode }) => {
	const store = useGoalStore();
	return (
		<UserGoalContext.Provider value={store}>
			{children}
		</UserGoalContext.Provider>
	);
};

export const useUserGoal = (): GoalState => {
	const context = useContext(UserGoalContext);
	if (context === undefined) {
		showToast({
			type: "error",
			message: "useUserGoal은 provider와 함께 사용해야합니다.",
		});
		throw new Error("에러 던져! 던지는게 맞아?");
	}
	return context;
};
