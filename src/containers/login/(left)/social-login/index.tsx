"use client";

import { handleGoogleLogin } from "@utils/getGoogleAuthUrl";
import { handleKakaoLogin } from "@utils/getKakaoAuthUrl";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

const SocialLogin = () => {
	return (
		<div>
			<div className="relative flex items-center w-full my-4">
				<div className="flex-grow border-t border-sub-gray4"></div>
				<span className="mx-4 text-sub-gray4">SNS 계정으로 로그인</span>
				<div className="flex-grow border-t border-sub-gray4"></div>
			</div>
			<div className="flex items-center justify-center gap-[20px]">
				<button
					onClick={handleGoogleLogin}
					className="rounded-full p-[20px] border border-sub-gray3 text-[20px]"
				>
					<FcGoogle />
				</button>
				<button
					onClick={handleKakaoLogin}
					className="rounded-full p-[20px] border border-[#FDE501] bg-[#FDE501] text-[20px]"
				>
					<RiKakaoTalkFill />
				</button>
			</div>
		</div>
	);
};
export default SocialLogin;
