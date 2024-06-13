import { queryOptions } from "@tanstack/react-query";

import getBookMark from "./getBookMark";

const bookMarkOption = {
	getBookMark: () =>
		queryOptions({
			queryKey: ["bookMark"],
			queryFn: () => getBookMark(),
		}),
};

export default bookMarkOption;
