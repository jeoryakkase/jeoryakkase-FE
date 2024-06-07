import Link from "next/link";

import { Button } from "@components/Button";

const SalternMenuMap = [
	{ path: "/saltern/vote", text: "허불허" },
	{ path: "/saltern/tips", text: "짠팁" },
	{ path: "/saltern/taesan", text: "소금 모아 태산" },
];

const SalternMenu = () => {
	return (
		<section className="w-full flex flex-col">
			<div className="flex justify-center mb-4">
				{SalternMenuMap.map((salternMenu) => (
					<Link href={salternMenu.path} key={salternMenu.path} passHref>
						<Button type="button" className="mr-16">
							{salternMenu.text}
						</Button>
					</Link>
				))}
			</div>
			<div className="w-full h-0.5 bg-sub-gray1 mt-4 mb-5" />
		</section>
	);
};

export default SalternMenu;
