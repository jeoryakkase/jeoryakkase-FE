"use client";

import { useState } from "react";

import { Button } from "@components/Button";
import { ContentSection } from "@components/ContentSection";
import ZarangCard from "@components/ZarangCard";
import {
	dummyTaeSanData,
	dummyUserTaeSanData,
} from "@containers/saltern/dummy";

import ButtonContainer from "./UI/ButtonContainer";

interface TaeSanProps {
	initialTaeSanData: typeof dummyTaeSanData;
}

const TaeSan = ({ initialTaeSanData }: TaeSanProps) => {
	const [taeSanDatas, setTaeSanDataDatas] = useState(initialTaeSanData);

	const handleSaltHistory = () => {
		// get 요청 보내는 로직
		setTaeSanDataDatas(dummyUserTaeSanData);
	};

	return (
		<section className="flex flex-row">
			<ContentSection
				title="소금 모아 태산"
				subTitle="개인 목표나 챌린지를 완주한 소금쟁이들의 역사를 확인할 수 있습니다"
				// childrenClassName="flex flex-wrap "
			>
				<div className="flex flex-col flex-wrap items-end">
					<Button type="button" className="w-52" onClick={handleSaltHistory}>
						{" "}
						내 소금 히스토리 모아보기
					</Button>
					<div className="flex flex-wrap">
						{taeSanDatas.map((taesanData) => (
							<div
								key={taesanData.id}
								className="w-[350px] h-[350px] mr-20 mt-14"
							>
								<ZarangCard className="mb-6" {...taesanData} />
								<ButtonContainer
									isCheered={taesanData.isCheered}
									isOwner={taesanData.isOwnered}
								/>
							</div>
						))}
					</div>
				</div>
			</ContentSection>
		</section>
	);
};

export default TaeSan;
