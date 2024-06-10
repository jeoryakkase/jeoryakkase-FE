"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
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
import { interestTags } from "@containers/signup/signupValidation";
import mockMemberData from "@containers/userInfo/assets/userinfoData";
import { zodResolver } from "@hookform/resolvers/zod";
import showToast from "@lib/toastConfig";
import { getDuplicationNickName } from "@services/login/duplication";
import userQueryOption from "@services/user";
import patchUserInfo from "@services/user/pathchUserInfo";
import { useMutation, useQuery } from "@tanstack/react-query";

import FormSchema from "../../userInfoEditValidation";

export interface UserEdit {
	profileImage?: File | null;
	about: string;
	email: string;
	nickname: string;
	age: number;
	gender: string;
	savePurpose: string;
	interests: number[];
}

const UserInfoEditForm = () => {
	const router = useRouter();
	const { data: userData } = useQuery({
		...userQueryOption.getUserInfo(),
	});

	console.log("userData", userData);
	const { mutate: patchUser } = useMutation({
		mutationFn: patchUserInfo,
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			profileImage: null,
			about: "",
			email: "",
			nickname: "",
			age: 0,
			gender: "MALE",
			savePurpose: "",
			interests: [],
		},
	});
	console.log(
		"관심사태그",
		useWatch({ control: form.control, name: "interests" }),
	);

	useEffect(() => {
		if (userData) {
			form.reset({
				profileImage: null,
				about: userData.about ?? "",
				email: userData.email ?? "",
				nickname: userData.nickname ?? "",
				age: userData.age ?? 0,
				gender: userData.gender ?? "",
				savePurpose: userData.savePurpose ?? "",
				interests: userData.interests ?? [],
			});
		}
	}, [userData, form]);

	const onSubmit = (data: z.infer<typeof FormSchema>) => {
		console.log(data);
		patchUser(data, {
			onSuccess: () => {
				showToast({
					type: "success",
					message: "성공적으로 수정되었습니다.",
				});
				router.push("/userinfo");
			},
			onError: () => {
				showToast({
					type: "error",
					message: "유저 정보가 정상적으로 수정되지 않았습니다.",
				});
			},
		});
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
								<ImgInput
									id="profileImage"
									setProfileImageData={onChange}
									initialImage={mockMemberData.profileImage}
								/>
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
				<Button type="submit">회원정보 수정</Button>
			</form>
		</Form>
	);
};

export default UserInfoEditForm;
