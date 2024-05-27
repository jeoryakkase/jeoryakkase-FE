"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/shadcn/ui/Button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/shadcn/ui/Form";
import { Input } from "@components/shadcn/ui/Input";

import { toast } from "react-toastify";
import { FormSchema, loginDefault } from "../loginValidation";
import SocialLogin from "./social-login";

const LoginForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: loginDefault,
	});

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
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

export default LoginForm;
