import Link from "next/link";

import TagCard from "@components/TagCard";
import { Challenge } from "@containers/challenge/types";

interface ArrangedCardProps {
	allChallenge: Challenge[];
}

const ArrangedCard = ({ allChallenge }: ArrangedCardProps) => {
	const groupedChallenges: Challenge[][] = [];
	for (let i = 0; i < allChallenge.length; i += 5) {
		groupedChallenges.push(allChallenge.slice(i, i + 5));
	}

	return (
		<>
			{groupedChallenges.map((group, index) => (
				// eslint-disable-next-line react/no-array-index-key
				<section className="flex mb-10" key={`group-${index}`}>
					{group.slice(0, 2).map((challenge) => (
						<Link href={`/challenge/${challenge.id}`} key={`${challenge.id}`}>
							<TagCard
								key={`${challenge.id}`}
								title={challenge.title}
								description={challenge.description}
								className="w-[250px] h-[620px] flex-shrink-0 mr-4"
								tagMessage={challenge.messages}
								imgs={challenge.imgs}
							/>
						</Link>
					))}
					<div className="flex flex-col">
						{group[2] && (
							<Link href={`/challenge/${group[2].id}`} key={`${group[2].id}-2`}>
								<TagCard
									key={`${group[2].id}-2`}
									title={group[2].title}
									description={group[2].description}
									className="w-[620px] h-[300px] flex-shrink-0 mb-4"
									tagMessage={group[2].messages}
									imgs={group[2].imgs}
								/>
							</Link>
						)}
						<div className="flex">
							{group.slice(3, 5).map((challenge) => (
								<Link
									href={`/challenge/${challenge.id}`}
									key={`${challenge.id}`}
								>
									<TagCard
										key={`${challenge.id}`}
										title={challenge.title}
										description={challenge.description}
										className="w-[300px] h-[300px] flex-shrink-0 mr-4"
										tagMessage={challenge.messages}
										imgs={challenge.imgs}
									/>
								</Link>
							))}
						</div>
					</div>
				</section>
			))}
		</>
	);
};

export default ArrangedCard;
