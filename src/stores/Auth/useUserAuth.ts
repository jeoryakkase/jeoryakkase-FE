import { create } from "zustand";

interface BadgeData {
	name: string;
	badgeDesc: string;
	badgeImage: string;
}
export interface UserStoreData {
	nickname: string;
	badge: BadgeData | null;
	profileImage: string | null;
}
interface AuthState {
	isLogined: boolean;
	user: UserStoreData | null;
	// 대표 뱃지도 저장해두면 좋을 듯
	login: (user: UserStoreData) => void;
	logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
	isLogined: true,
	user: null,
	login: (user) => set({ isLogined: true, user }),
	logout: () => set({ isLogined: false, user: null }),
}));

export default useAuthStore;
