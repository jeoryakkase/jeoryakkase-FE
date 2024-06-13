import ImgInput from "@components/PreviewImg/ImgInput";
import { Textarea } from "@components/shadcn/ui/Textarea";
import {
	MemberChallengesBadges,
	RepresentativeBadge,
} from "@containers/userInfo/types";

import DropDownBadge from "../DropDownBadge";

interface IntroductionProps {
	nickname: string;
	profileImage: string;
	about?: string;
	representativeBadge?: RepresentativeBadge[];
	generalBadges?: MemberChallengesBadges[];
}
const Introduction = ({
	nickname,
	profileImage,
	about,
	representativeBadge,
	generalBadges,
}: IntroductionProps) => {
	return (
		<div className="flex flex-col gap-[40px] max-w-[40rem] m-auto">
			<div className="relative">
				<ImgInput viewOnly initialImage={profileImage} />
				<div className="absolute top-1/2 left-1/2 transform translate-x-[140%] translate-y-[-50%] text-[20px]">
					<DropDownBadge
						representativeBadge={representativeBadge}
						generalBadges={generalBadges}
					/>
				</div>
			</div>
			<div>{nickname}</div>
			<Textarea
				readOnly
				value={about ?? "자기소개를 작성해주세요 🥹"}
				className="resize-none"
			/>
		</div>
	);
};

export default Introduction;
