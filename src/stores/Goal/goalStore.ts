import { create } from "zustand";

type Goal = {
	id: string;
	img: string;
	title: string;
	percentage: number;
	leftMoney: number;
	dayCount: number;
	leftDay: number;
};

export type GoalState = {
	goals: Goal[];
	setGoals: (goals: Goal[]) => void;
};

const useGoalStore = create<GoalState>((set) => ({
	goals: [],
	setGoals: (goals) => set({ goals }),
}));

export default useGoalStore;
