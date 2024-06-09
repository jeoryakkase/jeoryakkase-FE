"use client";

import { redirect, useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
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

import { loginDefault, loginValidation } from "./loginValidation";
import SocialLogin from "../SocialLogin";
import { useEffect, useState } from "react";
import { envConfig } from "@lib/envConfig";
import postLogin from "@services/api/user/login";

const LeftForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof loginValidation>>({
		resolver: zodResolver(loginValidation),
		defaultValues: loginDefault,
	});

	const onSubmit = async (data: z.infer<typeof loginValidation>) => {
		try {
			console.log("data: ", data);
			await signIn("credentials", {
				username: data.email,
				password: data.password,
				redirect: false,
				callbackUrl: `${envConfig.NEXTAUTH_URL}`,
			});
			// const response = postLogin(data);
			// console.log(response);

			toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
			router.replace("/");
		} catch (error) {
			toast.error("로그인에 실패하였습니다.", { autoClose: 2000 });
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
