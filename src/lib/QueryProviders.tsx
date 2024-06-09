"use client";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
/* eslint-disable import/no-extraneous-dependencies */
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

import showToast from "./toastConfig";

const makeQueryClient = () => {
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
};

let browserQueryClient: QueryClient | undefined;

const getQueryClient = () => {
	// 서버
	if (typeof window === "undefined") {
		return makeQueryClient();
	}
	// 브라우저
	if (!browserQueryClient) browserQueryClient = makeQueryClient();
	return browserQueryClient;
};

const QueryProviders = ({ children }: { children: React.ReactNode }) => {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
			<ToastContainer />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default QueryProviders;
