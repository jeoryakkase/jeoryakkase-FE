"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signInWithCredentials } from "src/serverActions/auth";

import { Button } from "@components/Button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/shadcn/ui/Form";
import { Input } from "@components/shadcn/ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";
import useAuthStore, { UserStoreData } from "@stores/Auth/useUserAuth";

import { loginDefault, loginValidation } from "./loginValidation";
import SocialLogin from "../SocialLogin";

const LeftForm = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const login = useAuthStore((state) => state.login);
	const { user } = useAuthStore();
	const form = useForm<z.infer<typeof loginValidation>>({
		resolver: zodResolver(loginValidation),
		defaultValues: loginDefault,
	});

	useEffect(() => {
		if (session) {
			const userData = session.user;
			if (userData) {
				login(userData.userStoreData as UserStoreData); // 서버에서 관리하는 로그인 api 응답값의 여부에따라
			}
		}
	}, [session, user?.nickname]);

	const onSubmit = async (data: z.infer<typeof loginValidation>) => {
		try {
			const result = (await signInWithCredentials(
				data,
			)) as unknown as Promise<any>;
			console.log("result", result);
			if (result && !(await result).error) {
				login({
					nickname: data.email,
					badge: null,
					profileImage: null,
				});
				router.replace("/");
			} else {
				showToast({ type: "error", message: "로그인 처리에 실패하였습니다." });
			}
		} catch (error) {
			showToast({ type: "error", message: "로그인에 실패하였습니다." });
		}
	};
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full flex gap-[40px] flex-col"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>이메일</FormLabel>

							<FormControl>
								<Input
									type="email"
									placeholder="이메일을 입력해주세요."
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>비밀번호</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="비밀번호를 입력해주세요."
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">로그인</Button>
			</form>
			<SocialLogin />
		</Form>
	);
};

export default LeftForm;
