import { queryOptions } from "@tanstack/react-query";

import getUserInfo from "./getUserInfo";
import getUserInfoEdit from "./getUserInfoEdit";

const userQueryOption = {
	getUserInfoEdit: () =>
		queryOptions({
			queryKey: ["userInfoEdit"],
			queryFn: () => getUserInfoEdit(),
		}),
	getUserInfo: () =>
		queryOptions({
			queryKey: ["userInfo"],
			queryFn: () => getUserInfo(),
		}),
};

export default userQueryOption;
