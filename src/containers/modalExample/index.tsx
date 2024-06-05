"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@components/Button";
import Modal from "@components/Modal";
import ModalForm from "@components/ModalForm";
import ModalDateRange from "@components/ModalForm/UI/ModalDateRange";
import { zodResolver } from "@hookform/resolvers/zod";

import ModalPopoverExample from "./ModalPopoverExample";

const options = [
	{ value: "도시락 싸기", label: "도시락 싸기" },
	{ value: "대중교통 이용하기", label: "대중교통 이용하기" },
	{ value: "카페출입 금지", label: "카페출입 금지" },
	{ value: "안 쓰는 물건 중고거래하기", label: "안 쓰는 물건 중고거래하기" },
];
const FormSchema = z.object({
	dateRange: z
		.object({
			from: z.date().optional(),
			to: z.date().optional(),
		})
		.optional(),
});
const ModalExample = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			dateRange: { from: undefined, to: undefined },
		},
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<Modal
			triggerChildren={<Button>Edit Profile</Button>}
			title="목표 작성"
			button="확인"
			closeButton="아니요"
		>
			<ModalForm>
				<ModalForm.Input title="목표 제목" placeholder="제목을 작성해주세요." />
				<ModalForm.Input type="number" title="목표 금액" placeholder="0" />
				<ModalForm.ImgInput
					title="인증 이미지"
					// id="profileImage"
					// setPreviewImageData={() => {}}
					// initialImage=""
				/>
				<ModalForm.Textarea title="내용" placeholder="내용을 입력해주세요." />
				<ModalForm.Select
					title="인증 내용"
					triggerPlaceholder="인증 내용을 선택해주세요."
					options={options}
					noOptionsMessage="인증 내용을 추가해주세요."
					formChildren={<ModalPopoverExample />}
				/>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="dateRange"
						control={control}
						render={({ field }) => (
							<ModalDateRange
								value={field.value}
								onChange={(dateRange) => field.onChange(dateRange)}
							/>
						)}
					/>
					{errors.dateRange && <p>{errors.dateRange.message}</p>}
					{/* <Button type="submit">Submit</Button> */}
				</form>
			</ModalForm>
		</Modal>
	);
};
export default ModalExample;
