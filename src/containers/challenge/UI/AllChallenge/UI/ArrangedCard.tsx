import TagCard from "@components/TagCard";
import { Challenge } from "@containers/challenge/types";

interface ArrangedCardProps {
	allChallenge: Challenge[];
}

const ArrangedCard = ({ allChallenge }: ArrangedCardProps) => {
	return (
		<section className="flex mb-10">
			{allChallenge.slice(0, 2).map((challenge, index) => (
				<TagCard
					key={`${challenge.id}-${index}`}
					title={challenge.title}
					description={challenge.description}
					className="w-[250px] h-[620px] flex-shrink-0 mr-4"
					tagMessage={challenge.messages}
					imgs={challenge.imgs}
				/>
			))}
			<div className="flex flex-col">
				{allChallenge[2] && (
					<TagCard
						key={`${allChallenge[2].id}-2`}
						title={allChallenge[2].title}
						description={allChallenge[2].description}
						className="w-[620px] h-[300px] flex-shrink-0 mb-4"
						tagMessage={allChallenge[2].messages}
						imgs={allChallenge[2].imgs}
					/>
				)}
				<div className="flex">
					{allChallenge.slice(3, 5).map((challenge,index) => (
						<TagCard
							key={`${challenge.id}-${index + 3}`}
							title={challenge.title}
							description={challenge.description}
							className="w-[300px] h-[300px] flex-shrink-0 mr-4"
							tagMessage={challenge.messages}
							imgs={challenge.imgs}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ArrangedCard;
