import { UserGoalProvider } from "@stores/Goal/GoalContext";

import MainWithData from "./MainWithData";

const MainPage = () => {
	return (
		<UserGoalProvider>
			<MainWithData />
		</UserGoalProvider>
	);
};

export default MainPage;
