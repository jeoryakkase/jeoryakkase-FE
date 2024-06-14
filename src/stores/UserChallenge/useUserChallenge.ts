import { create } from "zustand";

type TagImgType = { id: string; img: string }[] | string;

export type UserChallenge = {
	id: string;
	challengeId: string;
	title: string;
	description: string;
	startDate: string;
	endDate: string;
	imgs?: TagImgType;
	today: boolean;
	dueDate?: boolean;
	countDay?: number;
	memeberChallengeId: number;
};

export type UserChallengeState = {
	challenges: UserChallenge[];
	setChallenges: (challenges: UserChallenge[]) => void;
};

const useUserChallenge = create<UserChallengeState>((set) => ({
	challenges: [],
	setChallenges: (challenges) => set({ challenges }),
}));

export default useUserChallenge;
