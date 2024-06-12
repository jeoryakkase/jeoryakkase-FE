"use client";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import ImgInput from "@components/PreviewImg/ImgInput";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/shadcn/ui/Form";
import { RadioGroup, RadioGroupItem } from "@components/shadcn/ui/Radio-group/";
import TagGroup from "@components/TagGroup";
import { Textarea } from "@components/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";
import {
	getDuplicationEmail,
	getDuplicationNickName,
} from "@services/login/duplication";
import postSignUp from "@services/signup";
import { useMutation } from "@tanstack/react-query";

import {
	interestTags,
	signUpDefault,
	signupValidation,
} from "./signupValidation";

const SignupForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof signupValidation>>({
		resolver: zodResolver(signupValidation),
		defaultValues: signUpDefault,
	});
	const { mutate } = useMutation({
		mutationFn: postSignUp,
		onSuccess: () => {
			showToast({
				type: "success",
				message: "회원가입이 완료되었습니다.",
			});
			router.push("/login");
		},
		onError: () => {
			showToast({
				type: "error",
				message: "회원가입에 실패하였습니다.",
			});
		},
	});
	console.log(
		"관심사태그",
		useWatch({ control: form.control, name: "interests" }),
	);

	const onSubmit = (data: z.infer<typeof signupValidation>) => {
		mutate(data);
		console.log(data);
		// 주스탠드 스토어 연결
	};
	// 이메일 중복검사
	const handleCheckEmail = async () => {
		const email = form.getValues("email");
		const response = await getDuplicationEmail({ email });
		if (response.status === 200) {
			showToast({
				type: "success",
				message: "사용 가능한 이메일 입니다.",
			});
		} else if (
			response.status === 409 &&
			response.data === "Member with this email already exists."
		) {
			showToast({
				type: "error",
				message: "이미 사용중인 이메일 입니다.",
			});
		}
	};
	// 닉네임 중복검사
	const handleCheckNickName = async () => {
		const nickname = form.getValues("nickname");
		const response = await getDuplicationNickName({ nickname });
		if (response.status === 200) {
			showToast({
				type: "success",
				message: "사용 가능한 닉네임 입니다.",
			});
		} else if (
			response.status === 409 &&
			response.data === "Member with this nickname already exists.."
		) {
			showToast({
				type: "error",
				message: "이미 사용중인 닉네임 입니다.",
			});
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
					name="profileImage"
					render={({ field: { onChange } }) => (
						<FormItem>
							<FormControl>
								<ImgInput id="profileImage" setProfileImageData={onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="about"
					render={({ field }) => (
						<FormItem>
							<FormLabel>자기소개</FormLabel>
							<FormControl>
								<Textarea placeholder="자기소개를 작성해주세요." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
								<Button type="button" onClick={handleCheckEmail}>
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
								<Button type="button" onClick={handleCheckNickName}>
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
				<div className="flex gap-[40px]">
					<FormField
						control={form.control}
						name="age"
						render={({ field }) => (
							<FormItem>
								<FormLabel>연령</FormLabel>
								<FormControl>
									<Input
										type="number"
										value={field.value}
										onChange={(e) => field.onChange(e.target.valueAsNumber)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="gender"
						render={({ field }) => (
							<FormItem>
								<FormLabel>성별</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className="flex  "
									>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormLabel className="font-normal">남성</FormLabel>
											<FormControl>
												<RadioGroupItem value="MALE" />
											</FormControl>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormLabel className="font-normal">여성</FormLabel>
											<FormControl>
												<RadioGroupItem value="FEMALE" />
											</FormControl>
										</FormItem>
									</RadioGroup>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="savePurpose"
					render={({ field }) => (
						<FormItem>
							<FormLabel>절약의 목적</FormLabel>
							<FormControl>
								<Textarea placeholder="글을 작성해주세요." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="interests"
					render={({ field }) => (
						<FormItem>
							<FormLabel>관심사 태그</FormLabel>
							<FormControl>
								<TagGroup
									tags={interestTags}
									selectedTags={field.value}
									onChange={(newSelectedTags) => {
										field.onChange(newSelectedTags);
									}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">회원가입</Button>
			</form>
		</Form>
	);
};

export default SignupForm;
