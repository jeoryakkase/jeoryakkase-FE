import { ContentSection } from "@components/ContentSection";
import TagCard from "@components/TagCard";

// props로 받아서 그려주기~
const Challenge = () => {
	return (
		<ContentSection
			title="참여 중인 챌린지"
			childrenClassName="flex flex-row justify-start space-x-10"
		>
			<TagCard
				title="점심 도시락 싸가기"
				description="한 달"
				startDate="2024.05.15"
				endDate="2024.06.14"
				today
				dueDate={false}
				className="w-[300px] h-[300px] "
			/>
			<TagCard
				title="점심 도시락 싸가기"
				description="한 달"
				startDate="2024.05.15"
				endDate="2024.06.14"
				today
				dueDate
				className="w-[300px] h-[300px] "
			/>
			<TagCard
				title="점심 도시락 싸가기"
				description="한 달"
				startDate="2024.05.15"
				endDate="2024.06.14"
				today={false}
				dueDate
				className="w-[300px] h-[300px] "
			/>
		</ContentSection>
	);
};

export default Challenge;
