import { Button } from "@components/shadcn/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";

export default function SocialLogin() {
	return (
		<div>
			<div className="text-center">SNS 계정으로 로그인</div>
			<Button>
				<FcGoogle />
			</Button>
			<Button>
				<RiKakaoTalkFill />
			</Button>
		</div>
	);
}
