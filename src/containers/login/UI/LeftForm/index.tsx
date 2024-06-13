"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

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
import postLogin from "@services/api/user/login";
import { useMutation } from "@tanstack/react-query";

import { loginDefault, loginValidation } from "./loginValidation";
import SocialLogin from "../SocialLogin";

const LeftForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof loginValidation>>({
		resolver: zodResolver(loginValidation),
		defaultValues: loginDefault,
	});
	const { mutate } = useMutation({
		mutationFn: postLogin,
	});
	const onSubmit = (data: z.infer<typeof loginValidation>) => {
		mutate(data, {
			onSuccess: () => {
				// const accessToken = data.headers.authorization;
				// const refreshToken = data.data;
				// setAccessToken(accessToken);
				// setRefreshToken(refreshToken);
				// const { accessToken, refreshToken } = data;
				// await signIn("credentials", {
				// username: email,
				// password
				// 	redirect: false,
				// 	accessToken,
				// 	refreshToken,
				// });
				toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
				router.push("/");
			},
			onError: () => {
				toast.error("로그인에 실패하였습니다.", { autoClose: 2000 });
			},
		});

		console.log(data);
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
