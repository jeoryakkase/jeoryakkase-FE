"use client";

import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { showToast } from "./toastConfig";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false,
				staleTime: 60 * 1000,
				gcTime: 0,
			},
			mutations: {},
		},
		queryCache: new QueryCache({
			onError: (error, query) => {
				if (!query.meta?.ignoreToast) {
					showToast({ type: "error", message: (error as Error).message });
				}
			},
		}),
	});
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
	// 서버
	if (typeof window === "undefined") {
		return makeQueryClient();
	} else {
		// 브라우저
		if (!browserQueryClient) browserQueryClient = makeQueryClient();
		return browserQueryClient;
	}
}

export default function Providers({ children }: { children: ReactNode }) {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{/* experimental 기능이긴 하지만, 복잡하지 않은 쿼리 사용하거나 DX 경험 측면에서
			사용하기 좋아보임. suspense 감싸서 dehydrate하는 건 너무
			복잡해보임 */}
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			<ToastContainer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
