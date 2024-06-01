import { create } from "zustand";

import { CommentProps } from "@components/Feed/UI/Comment/CommentBox";

export interface CommentState {
	comments: Record<string, { commentCounts: number; comments: CommentProps[] }>;
	setComments: (
		postId: string,
		commentCounts: number,
		comments: CommentProps[],
	) => void;
}

const useCommentStore = create<CommentState>((set) => ({
	comments: {},
	setComments: (postId, commentCounts, comments) =>
		set((state) => ({
			comments: {
				...state.comments,
				[postId]: { commentCounts, comments },
			},
		})),
}));

export default useCommentStore;
