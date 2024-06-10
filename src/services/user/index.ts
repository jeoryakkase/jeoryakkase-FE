import { queryOptions } from "@tanstack/react-query";

import getUserInfo from "./getUserInfo";

const userQueryOption = {
	getUserInfo: () =>
		queryOptions({
			queryKey: ["userInfo"],
			queryFn: () => getUserInfo(),
		}),
};

export default userQueryOption;
