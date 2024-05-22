"use client";

import { Form } from "@components/Form/page";
import { useForm } from "react-hook-form";
import { Textarea } from "../../../../components/Form/Textarea/page";

export function SignupForm() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};
	const onClick = () => {
		console.log("click");
	};
	return (
		<Form
			className="w-full flex gap-[40px] flex-col"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Form.Input
				type="email"
				placeholder="이메일을 입력해주세요."
				title="이메일"
				{...register("email")}
				buttonText="중복확인"
				buttonClick={onClick}
			/>
			<Form.Input
				type="text"
				placeholder="인증번호를 입력해주세요."
				title="이메일 인증번호"
				{...register("verify")}
				buttonText="인증번호 확인"
				buttonClick={onClick}
			/>
			<Form.Input
				type="text"
				placeholder="닉네임을 입력해주세요"
				title="닉네임"
				{...register("nickname")}
				buttonText="중복확인"
				buttonClick={onClick}
			/>
			<Form.Input
				type="password"
				placeholder="비밀번호를 입력해주세요"
				title="비밀번호"
				{...register("password")}
			/>
			<Form.Input
				type="password"
				placeholder="비밀번호를 입력해주세요"
				title="비밀번호 확인"
				{...register("confirmPassword")}
			/>
			<div>
				<Form.Input
					type="number"
					placeholder="0"
					title="연령"
					{...register("age")}
				/>
			</div>
			<Form.Textarea placeholder="글을 작성해주세요." title="절약의 목적" />

			<Form.Button className={`px-[40px] py-[14px]`} type="submit">
				회원가입
			</Form.Button>
		</Form>
	);
}
