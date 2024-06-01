import { create } from "zustand";

interface AuthState {
	isLogined: boolean;
	nickname: string;
	// 대표 뱃지도 저장해두면 좋을 듯
	login: (nickname: string) => void;
	logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	isLogined: false,
	nickname: "",
	login: (nickname) => set({ isLogined: true, nickname }),
	logout: () => set({ isLogined: false, nickname: "" }),
}));

export default useAuthStore;
