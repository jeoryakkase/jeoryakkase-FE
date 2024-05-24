"use client";
import { useCallback, useEffect, useState } from "react";
import { Badge } from "@components/shadcn/ui/Badge";
import clsx from "clsx";

interface Tag {
	id: number;
	name: string;
}

interface TagGroupProps {
	tags: Tag[];
	selectedTags: number[];
	onChange: (selectedTags: number[]) => void;
}

const TagGroup = ({ tags, selectedTags, onChange }: TagGroupProps) => {
	const toggleTag = (tagId: number) => {
		const newSelectedTags = selectedTags.includes(tagId)
			? selectedTags.filter((id) => id !== tagId)
			: [...selectedTags, tagId];
		onChange(newSelectedTags);
	};

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => (
				<div key={tag.id} onClick={() => toggleTag(tag.id)}>
					<Badge variant="formTag">{tag.name}</Badge>
					<input
						type="hidden"
						value={selectedTags.includes(tag.id) ? tag.id : ""}
					/>
				</div>
			))}
		</div>
	);
};

export default TagGroup;
