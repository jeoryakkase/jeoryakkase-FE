import LeftForm from "./UI/LeftForm";
import RightForm from "./UI/RightForm";

const LoginForm = () => {
	return (
		<section className=" m-auto flex justify-between gap-[30px]">
			<div className="w-[45%]">
				<h1 className="font-bold text-xxxl  mb-[30px]">Login</h1>
				<LeftForm />
			</div>
			<div className="w-[45%]">
				<h1 className="font-bold text-xxxl  mb-[30px]">Signup</h1>
				<RightForm />
			</div>
		</section>
	);
};

export default LoginForm;
