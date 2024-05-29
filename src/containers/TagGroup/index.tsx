"use client";

import { Badge } from "@components/shadcn/ui/Badge";
import cn from "@utils/classnames.utils";

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
			? selectedTags.filter((id) => id! === tagId)
			: [...selectedTags, tagId];
		onChange(newSelectedTags);
	};

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
				<div key={tag.id} onClick={() => toggleTag(tag.id)}>
					<Badge
						variant="formTag"
						className={cn(
							"cursor-pointer",
							selectedTags.includes(tag.id) && "bg-blue-500 text-white",
						)}
					>
						{tag.name}
					</Badge>
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
