import { ContentSection } from "@components/ContentSection";

import HotPostContent from "./HotPostContent";

const HotPost = ({ hotPostData }) => {
	return (
		<ContentSection
			title="염전 실시간 인기글"
			childrenClassName="flex flex-col justify-center space-x-10"
		>
			<HotPostContent
				voteTitle={hotPostData.voteTitle}
				voteContent={hotPostData.voteContent}
				tipTitle={hotPostData.tipTitle}
				tipContent={hotPostData.tipContent}
				tipImg={hotPostData.tipImg}
			/>
		</ContentSection>
	);
};

export default HotPost;
