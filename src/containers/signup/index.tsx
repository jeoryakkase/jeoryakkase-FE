"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/shadcn/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/shadcn/ui/form";
import { Input } from "@components/shadcn/ui/input";
import { toast } from "react-toastify";
import { FormSchema, signUpDefault } from "./signupValidation";

export function SignupForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: signUpDefault,
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast.success("로그인이 완료되었습니다.", { autoClose: 2000 });
	}

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
							<div className="flex gap-[20px]">
								<FormControl>
									<Input
										type="email"
										placeholder="이메일을 입력해주세요."
										{...field}
									/>
								</FormControl>
								<Button type="button" onClick={() => {}}>
									중복확인
								</Button>
							</div>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="verify"
					render={({ field }) => (
						<FormItem>
							<FormLabel>이메일 인증번호</FormLabel>
							<div className="flex gap-[20px]">
								<FormControl>
									<Input
										type="text"
										placeholder="인증번호를 입력해주세요."
										{...field}
									/>
								</FormControl>
								<Button type="button" onClick={() => {}}>
									중복확인
								</Button>
							</div>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="nickname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>닉네임</FormLabel>
							<div className="flex gap-[20px]">
								<FormControl>
									<Input
										type="text"
										placeholder="닉네임을 입력해주세요."
										{...field}
									/>
								</FormControl>
								<Button type="button" onClick={() => {}}>
									중복확인
								</Button>
							</div>

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
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>비밀번호 확인</FormLabel>

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
				<FormField
					control={form.control}
					name="age"
					render={({ field }) => (
						<FormItem>
							<FormLabel>연령</FormLabel>

							<FormControl>
								<Input type="number" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">회원가입</Button>
			</form>
		</Form>
	);
}
