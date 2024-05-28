"use client";

import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
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
import { RadioGroup, RadioGroupItem } from "@components/shadcn/ui/Radio-group/";
import { Textarea } from "@components/shadcn/ui/Textarea";
import ImgInput from "@containers/PreviewImg/ImgInput";
import TagGroup from "@containers/TagGroup";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSchema, interestTags, signUpDefault } from "./signupValidation";

const SignupForm = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: signUpDefault,
	});
	console.log(
		"관심사태그",
		useWatch({ control: form.control, name: "interests" }),
	);

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
									인증번호 확인
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
				<div className="flex gap-[40px]">
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
												<RadioGroupItem value="male" />
											</FormControl>
										</FormItem>
										<FormItem className="flex items-center space-x-3 space-y-0">
											<FormLabel className="font-normal">여성</FormLabel>
											<FormControl>
												<RadioGroupItem value="female" />
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
									selectedTags={interestTags
										.filter((tag) => field.value.includes(tag.name))
										.map((tag) => tag.id)}
									onChange={(newSelectedTags) => {
										const selectedTagNames = interestTags
											.filter((tag) => newSelectedTags.includes(tag.id))
											.map((tag) => tag.name);
										field.onChange(selectedTagNames);
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