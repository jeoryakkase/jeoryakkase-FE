import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

const ChallengeLayout = ({ children }: LayoutProps) => {
	return (
		<div>
			<h2 className="font-bold text-xxl">짠맛 수련 챌린지 </h2>
			{children}
		</div>
	);
};

export default ChallengeLayout;
