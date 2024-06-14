import { ReactNode } from "react";

interface ChallengeLayoutProps {
	children: ReactNode;
	challengeFormModal: ReactNode;
}

const ChallengeLayout = ({
	children,
	challengeFormModal,
}: ChallengeLayoutProps) => {
	return (
		<div>
			<h2 className="font-bold text-xxl">짠맛 수련 챌린지 </h2>
			{children}
			{challengeFormModal}
		</div>
	);
};

export default ChallengeLayout;
