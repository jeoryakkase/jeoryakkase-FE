import { LoginForm } from "@containers/login";
import SocialLogin from "@containers/login/social-login";

export default function Login() {
	return (
		<section className={` m-auto flex justify-between gap-[30px]`}>
			<div className="w-[45%]">
				<h1 className={`font-bold text-xxxl  mb-[30px]`}>Login</h1>
				<LoginForm />
				<SocialLogin />
			</div>
			<div className="w-[45%]">
				<h1 className={`font-bold text-xxxl  mb-[30px]`}>Signup</h1>
				<p>
					아직 회원이 아니신가요? <br />
					다양한 서비스를 편리하게 이용하실 수 있습니다.
				</p>
			</div>
		</section>
	);
}
