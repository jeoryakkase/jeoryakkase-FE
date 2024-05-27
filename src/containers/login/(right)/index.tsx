"use client";
import { Button } from "@components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GoSignup = () => {
	const router = useRouter();
	return (
		<div className="flex flex-col">
			<p>
				아직 회원이 아니신가요? <br />
				다양한 서비스를 편리하게 이용하실 수 있습니다.
			</p>
			<div className="m-auto">
				<Image
					src={"/images/character02.png"}
					width={300}
					height={300}
					alt={"회원가입 안내"}
					className="static"
				/>
			</div>

			<Button type="button" onClick={() => router.push("/signup")}>
				회원가입 바로가기
			</Button>
		</div>
	);
};

export default GoSignup;
