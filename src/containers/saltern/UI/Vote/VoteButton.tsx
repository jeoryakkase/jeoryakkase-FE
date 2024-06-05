"use client";

import { useState } from "react";

import { m } from "framer-motion";

import cn from "@utils/classnames.utils";

interface VoteButtonProps {
	her: number;
	bullher: number;
	isVoted: boolean;
}

const VoteButton = ({ her, bullher, isVoted }: VoteButtonProps) => {
	const [leftText, setLeftText] = useState("허");
	const [rightText, setRightText] = useState("불허");

	const handleClick = (her: number, bullher: number, type: "허" | "불허") => {
		if (type === "허") {
			setLeftText(her.toString());
			setRightText(bullher.toString());
		} else {
			setLeftText(her.toString());
			setRightText(bullher.toString());
		}
	};

	return (
		<div className="flex flex-col items-center mt-10">
			<div className="w-2/5 h-8 rounded-full overflow-hidden relative">
				<m.div
					className={cn(
						"h-full absolute",
						{
							"bg-gradient-to-l from-main-darkblue to-point-red": her <= 50,
						},
						{
							"bg-gradient-to-r from-main-darkblue to-point-red": her > 50,
						},
					)}
					initial={{ width: "100%" }}
					animate={{ width: `${her}%` }}
					transition={{ duration: 1 }}
				/>
			</div>
			<div className="w-2/5 flex justify-between items-center absolute px-6 py-1">
				{!isVoted ? (
					<>
						<button
							type="button"
							className=" text-white"
							onClick={() => handleClick(her, bullher, "허")}
						>
							{leftText}
						</button>
						<button
							type="button"
							className=" text-white"
							onClick={() => handleClick(her, bullher, "불허")}
						>
							{rightText}
						</button>
					</>
				) : (
					<>
						<div className=" text-white">{her}</div>
						<div className=" text-white">{bullher}</div>
					</>
				)}
			</div>
		</div>
	);
};

export default VoteButton;
