"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@components/Button";

const RightForm = () => {
	return (
		<div className="flex flex-col">
			<p>
				아직 회원이 아니신가요? <br />
				다양한 서비스를 편리하게 이용하실 수 있습니다.
			</p>
			<div className="m-auto">
				<Image
					src="/images/character02.png"
					width={0}
					height={0}
					sizes="100vw"
					className="static w-[100%] object-cover"
					alt="회원가입 안내"
				/>
			</div>

			<Button type="button" bgColor="navy">
				<Link href="/signup">회원가입 바로가기</Link>
			</Button>
		</div>
	);
};

export default RightForm;
