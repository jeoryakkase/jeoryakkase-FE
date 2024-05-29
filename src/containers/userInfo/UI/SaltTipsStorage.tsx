import Image from "next/image";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";

import saltTipsData from "../assets/saltTipsData";

const SaltTipsStorage = () => {
	return (
		<ContentSection title="짠팁 보관함" childrenClassName="gap-[20px] ">
			{saltTipsData.map((tip) => (
				<Card
					key={tip.id}
					highlight={false}
					className="flex flex-col gap-[20px] items-start w-[300px] h-[300px] overflow-hidden text-ellipsis "
				>
					<Card.Header title={tip.title} />
					<Card.Content>
						<p>{tip.date}</p>
						<div className="w-[100px] h-[100px]">
							<Image src={tip.image} alt="" width={160} height={100} />
						</div>
						<p>{tip.content}</p>
					</Card.Content>
				</Card>
			))}
		</ContentSection>
	);
};

export default SaltTipsStorage;
