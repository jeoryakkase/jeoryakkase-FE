import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import Naegong from "@containers/naegong";

const NaegongPage = () => {
	return (
		<section className="w-full m-auto flex flex-col">
			<h1 className="font-bold text-xxxl  mb-[30px] ">짠맛 내공 쌓기</h1>
			<Link href="naegong/postmodal" className="self-end">
				<FaPlus />
			</Link>
			<Naegong />
		</section>
	);
};

export default NaegongPage;
