import Image from "next/image";
import Link from "next/link";
import { GoBookmark } from "react-icons/go";

import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import saltTipsData from "@containers/userInfo/assets/saltTipsData";

const SaltTipsStorage = () => {
	return (
		<ContentSection title="짠팁 보관함" childrenClassName="gap-[20px] flex-col">
			<Link href="/userinfo/tip-storage" className="self-end">
				더 보기
			</Link>
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
							<div className="w-[160px] ">
								<Image
									src={tip.image}
									alt=""
									width={0}
									height={0}
									sizes="100vw"
									className="static w-[100%] object-cover"
								/>
							</div>
							<p>{tip.content}</p>
						</Card.Content>
					</Card>
				))}
			</div>
		</ContentSection>
	);
};

export default SaltTipsStorage;
