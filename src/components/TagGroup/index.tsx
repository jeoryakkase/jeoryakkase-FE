"use client";

import clsx from "clsx";

import { Badge } from "@components/shadcn/ui/Badge";

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
				<Badge
					key={tag.id}
					onClick={() => toggleTag(tag.id)}
					variant="formTag"
					className={clsx(
						"cursor-pointer",
						selectedTags.includes(tag.id) && "bg-main-midblue text-white",
					)}
				>
					{tag.name}
					<input
						type="hidden"
						value={selectedTags.includes(tag.id) ? tag.id : ""}
					/>
				</Badge>
			))}
		</div>
	);
};

export default TagGroup;
