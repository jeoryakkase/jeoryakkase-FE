import SignupForm from "@containers/signup";

export default function Signup() {
	return (
		<section className={`max-w-[40rem] w-full m-auto `}>
			<h1 className="font-bold text-xxxl text-center mb-[30px]">SIGN UP</h1>
			<SignupForm />
		</section>
	);
}
