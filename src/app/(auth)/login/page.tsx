import LoginForm from "@containers/login/(left)";
import GoSignup from "@containers/login/(right)";

const Login = () => {
	return (
		<section className={` m-auto flex justify-between gap-[30px]`}>
			<div className="w-[45%]">
				<h1 className="font-bold text-xxxl  mb-[30px]">Login</h1>
				<LoginForm />
			</div>
			<div className="w-[45%]">
				<h1 className="font-bold text-xxxl  mb-[30px]">Signup</h1>
				<GoSignup />
			</div>
		</section>
	);
};

export default Login;
