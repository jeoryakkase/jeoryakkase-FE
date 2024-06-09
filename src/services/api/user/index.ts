import { queryOptions } from "@tanstack/react-query";

import { getDuplicationEmail, getDuplicationNickName } from "./duplication";
import { getGoogleAuthCode, getKakaoAuthCode } from "./social";

const userQueryOption = {
	getDuplicationEmail: ({ email }: { email: string }) =>
		queryOptions({
			queryKey: ["email", email],
			queryFn: () => getDuplicationEmail({ email }),
		}),
	getDuplicationNickName: ({ nickname }: { nickname: string }) =>
		queryOptions({
			queryKey: ["nickname", nickname],
			queryFn: () => getDuplicationNickName({ nickname }),
		}),
	getKakaoAuthToken: ({ code }: { code: string }) =>
		queryOptions({
			queryKey: ["kakaocode", code],
			queryFn: () => getKakaoAuthCode({ code }),
		}),
	getGoogleAuthToken: ({ code }: { code: string }) =>
		queryOptions({
			queryKey: ["googlecode", code],
			queryFn: () => getGoogleAuthCode({ code }),
		}),
};

export default userQueryOption;
