"use client";

import { createContext, useContext } from "react";

import showToast from "@lib/toastConfig";

import useCommentStore, { CommentState } from "./commentStore";

const CommentContext = createContext<CommentState | undefined>(undefined);

export const CommentProvider = ({ children }) => {
	const commentStore = useCommentStore();
	return (
		<CommentContext.Provider value={commentStore}>
			{children}
		</CommentContext.Provider>
	);
};

export const useCommentContext = () => {
	const context = useContext(CommentContext);
	if (!context) {
		showToast({
			type: "error",
			message: "useCommentContext은 provider와 함께 사용해야합니다.",
		});
		throw new Error("comment context 에러", {
			cause: {
				code: "NoCommentProvider",
				what: "CommentProvider가 누락되었거나 올바르게 설정되지 않았습니다.",
			},
		});
	}
	return context;
};
