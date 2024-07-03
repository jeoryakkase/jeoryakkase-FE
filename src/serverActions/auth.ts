"use server";

import { auth, signIn, signOut, update } from "src/auth";

import { LoginFormType } from "@containers/login/UI/LeftForm/loginValidation";

export const signInWithCredentials = async (data: LoginFormType) => {
	await signIn("credentials", {
		username: data.email,
		password: data.password,
		redirectTo: "/",
	});
};
export const signInWithGoogle = async () => {
	await signIn("google");
};
export const signInWithKakao = async () => {
	await signIn("kakao");
};
export const signOutWithForm = async () => {
	await signOut();
};
export { auth as getSession, update as updateSession };
