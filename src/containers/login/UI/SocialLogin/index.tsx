"use client";

import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

import { Button } from "@components/Button";
import { handleGoogleLogin } from "@constants/getGoogleAuthUrl";
import { handleKakaoLogin } from "@constants/getKakaoAuthUrl";

const SocialLogin = () => {
	return (
		<div>
			<div className="relative flex items-center w-full my-4">
				<div className="flex-grow border-t border-sub-gray4" />
				<span className="mx-4 text-sub-gray4">SNS 계정으로 로그인</span>
				<div className="flex-grow border-t border-sub-gray4" />
			</div>
			{/* 소셜 버튼 색상 수정해야함 */}
			<div className="flex items-center justify-center gap-[20px]">
				<Button
					type="button"
					onClick={handleGoogleLogin}
					className="rounded-full  border border-sub-gray3 bg-[#fff] text-[20px]"
				>
					<FcGoogle />
				</Button>
				<Button
					type="button"
					onClick={handleKakaoLogin}
					className="rounded-full  border border-[#FDE501] bg-[#FDE501] text-[20px]"
				>
					<RiKakaoTalkFill />
				</Button>
			</div>
		</div>
	);
};
export default SocialLogin;
