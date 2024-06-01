import Comment from "./UI/Comment";
import Container from "./UI/Container";
import Contents from "./UI/Contents";
import ProfileBox from "./UI/ProfileBox";

const Feed = ({ feedData }) => {
	return (
		<Container>
			<ProfileBox
				nickname={feedData.nickname}
				profileImg={feedData.profileImg}
				isOwner={feedData.isOwner}
				isChallenge={feedData.isChallenge}
				date={feedData.date}
				badge={feedData.badge}
				writeHour={feedData.writeHour}
				progressDate={feedData.progressDate}
			/>
			<Contents title={feedData.title} body={feedData.body} />
			<Comment commentData={feedData.commentData} />
		</Container>
	);
};

export default Feed;
