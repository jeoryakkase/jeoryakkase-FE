import ImgInput from "@components/PreviewImg/ImgInput";
import { Textarea } from "@components/shadcn/ui/Textarea";

import DropDownBadge from "./DropDownBadge";
import mockMemberData from "../assets/userinfoData";

const Introduction = () => {
	return (
		<div>
			<div className="relative">
				<ImgInput viewOnly initialImage={mockMemberData.profileImage} />
				<div className="absolute top-1/2 left-1/2 transform translate-x-[170%] translate-y-[-50%] text-[20px]">
					<DropDownBadge />
				</div>
			</div>

			<Textarea readOnly value={mockMemberData.about} className="resize-none" />
		</div>
	);
};

export default Introduction;
