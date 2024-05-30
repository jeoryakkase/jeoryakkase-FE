import { Button } from "@components/Button";
import Card from "@components/Card";
import { ContentSection } from "@components/ContentSection";
import { Badge } from "@components/shadcn/ui/Badge";
import SuccessBadge from "@components/SuccessBadge";

import challengHistoryData from "../assets/challengHistoryData";

const ChallengeHistory = () => {
	const statusColorClasses = {
		"인증 필요": "bg-point-lightred",
		"인증 완료": "bg-yellow-100 ",
		"진행 완료": "bg-blue-100 ",
	};
	const certificationNeeded = challengHistoryData
		.filter((challenge) => challenge.status === "인증 필요")
		.slice(0, 2);
	const certificationCompleted = challengHistoryData
		.filter((challenge) => challenge.status === "인증 완료")
		.slice(0, 2);
	const progressCompleted = challengHistoryData
		.filter((challenge) => challenge.status === "진행 완료")
		.slice(0, 4);
	return (
		<ContentSection
			title="챌린지 히스토리"
			childrenClassName="flex-col gap-[20px]"
		>
			<Button variant="ghost" className="self-end">
				더 보기
			</Button>
			<div className="flex justify-between">
				<div className="w-[50%]">
					<h2> 진행중</h2>
					<div className="flex gap-[20px]">
						<div className="flex flex-col gap-[20px]">
							{certificationNeeded.map((challenge) => {
								const colorClasses = statusColorClasses[challenge.status];
								return (
									<Card
										key={challenge.id}
										highlight={false}
										className={`flex flex-col gap-[10px] p-[20px] ${colorClasses}`}
									>
										<div className="flex gap-[20px] justify-between">
											<h2 className="text-[20px] font-bold ">
												{challenge.title}
											</h2>
											<p>D + 25</p>
										</div>
										<Card.Content className="p-0 flex flex-col gap-[30px]">
											<p>한달</p>
											<div className=" flex flex-col gap-[10px]">
												{challenge.tags.map((tag) => (
													<Badge key={tag} bgColor="darkblue">
														<p>{tag}</p>
													</Badge>
												))}
											</div>
											<p>
												{challenge.startDate} ~ {challenge.endDate}
											</p>
										</Card.Content>
									</Card>
								);
							})}
						</div>
						<div className="flex flex-col gap-[20px]">
							{certificationCompleted.map((challenge) => {
								const colorClasses = statusColorClasses[challenge.status];
								return (
									<Card
										key={challenge.id}
										highlight={false}
										className={`flex flex-col gap-[10px] p-[20px] ${colorClasses}`}
									>
										<div className="flex gap-[20px] justify-between">
											<h2 className="text-[20px] font-bold ">
												{challenge.title}
											</h2>
											<p>D + 25</p>
										</div>
										<Card.Content className="p-0 flex flex-col gap-[30px]">
											<p>한달</p>
											<div className=" flex flex-col gap-[10px]">
												{challenge.tags.map((tag) => (
													<Badge key={tag} bgColor="darkblue">
														<p>{tag}</p>
													</Badge>
												))}
											</div>
											<p>
												{challenge.startDate} ~ {challenge.endDate}
											</p>
										</Card.Content>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
				<div className="flex flex-col w-[50%]">
					<h2> 완료된 챌린지</h2>
					<div className="flex flex-wrap gap-[20px] ">
						{progressCompleted.map((challenge) => {
							const colorClasses = statusColorClasses[challenge.status];
							return (
								<Card
									key={challenge.id}
									highlight={false}
									className={`flex flex-col gap-[10px] p-[20px] w-[40%] relative border-none ${colorClasses}`}
								>
									<div className="flex gap-[20px] justify-between">
										<h2 className="text-[20px] font-bold ">
											{challenge.title}
										</h2>
										<p>D + 25</p>
									</div>
									<Card.Content className="p-0 flex flex-col gap-[30px]">
										<p>한달</p>
										<div className=" flex flex-col gap-[10px]">
											{challenge.tags.map((tag) => (
												<Badge key={tag} bgColor="darkblue">
													<p>{tag}</p>
												</Badge>
											))}
										</div>
										<p>
											{challenge.startDate} ~ {challenge.endDate}
										</p>
									</Card.Content>
									{challenge.badge && (
										<div>
											<Card
												highlight={false}
												className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center border-none"
											>
												<div />
											</Card>
											<div className="absolute z-20 top-0 left-0 p-[20px] w-full">
												<Badge bgColor="lightblue" className="text-black">
													챌린지 완료
												</Badge>

												<SuccessBadge
													contentType="image"
													fill="#FFFFE0"
													content={challenge.badge}
													className="w-[120px] h-[120px]"
													imageClassName="w-[72px] h-[72px]"
												/>
											</div>
										</div>
										// <ChallengeCompleted badge={challenge.badge} />
									)}
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</ContentSection>
	);
};

export default ChallengeHistory;
