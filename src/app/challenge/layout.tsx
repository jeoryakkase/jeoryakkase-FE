import { ReactNode } from "react";

interface ChallengeLayoutProps {
	children: ReactNode;
}

const ChallengeLayout = ({ children }: ChallengeLayoutProps) => {
	return (
		<div>
			<h2 className="font-bold text-xxl">짠맛 수련 챌린지 </h2>
			{children}
		</div>
	);
};

export default ChallengeLayout;
