import Image from "next/image";
import { GoBookmark } from "react-icons/go";

import Card from "@components/Card";

import saltTipsData from "../assets/saltTipsData";

const UerInfoTipStorage = () => {
	return (
		<div className="gap-[20px] flex-col">
			<div className="flex gap-[20px]">
				{saltTipsData.map((tip) => (
					<Card
						key={tip.id}
						highlight={false}
						className="flex flex-col gap-[20px] items-start w-[300px] h-[300px] overflow-hidden text-ellipsis "
					>
						<div className="flex items-center justify-between w-full">
							<Card.Header title={tip.title} />
							<div className="bg-main-yellow  rounded-full p-[10px]">
								<GoBookmark
									color="#fff"
									className="w-[30px] h-[30px]"
									strokeWidth="1px"
								/>
							</div>
						</div>

						<Card.Content>
							<p>{tip.date}</p>
							<div className="w-[100px] ">
								<Image
									src={tip.image}
									alt=""
									width={0}
									height={0}
									sizes="100vw"
									className="w-[100%] object-cover"
								/>
							</div>
							<p>{tip.content}</p>
						</Card.Content>
					</Card>
				))}
			</div>
		</div>
	);
};

export default UerInfoTipStorage;
