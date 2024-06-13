export interface UserInfoEditFormType {
	profileImage?: string | undefined;
	about: string;
	email: string;
	nickname: string;
	password: string;
	confirmPassword: string;
	age: number;
	gender: string;
	savePurpose: string;
	interests: number[];
}
