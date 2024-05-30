import BadgeCollection from "./UI/BadgeCollection";
import ChallengeHistory from "./UI/ChallengeHistory";
import Introduction from "./UI/Introduction";
import ProgressGoal from "./UI/ProgressGoal";
import SaltTipsStorage from "./UI/SaltTipsStorage";

const UserInfo = () => {
	return (
		<div>
			<Introduction />
			<BadgeCollection />
			<ProgressGoal />
			<ChallengeHistory />
			<SaltTipsStorage />
		</div>
	);
};

export default UserInfo;
