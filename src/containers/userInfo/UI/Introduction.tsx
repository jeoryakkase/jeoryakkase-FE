import ImgInput from "@components/PreviewImg/ImgInput";
import { Textarea } from "@components/shadcn/ui/Textarea";

import DropDownBadge from "./DropDownBadge";
import mockMemberData from "../assets/userinfoData";

const Introduction = () => {
	return (
		<div className="flex flex-col gap-[40px] max-w-[40rem] m-auto">
			<div className="relative">
				<ImgInput viewOnly initialImage={mockMemberData.profileImage} />
				<div className="absolute top-1/2 left-1/2 transform translate-x-[140%] translate-y-[-50%] text-[20px]">
					<DropDownBadge />
				</div>
			</div>

			<Textarea readOnly value={mockMemberData.about} className="resize-none" />
		</div>
	);
};

export default Introduction;
