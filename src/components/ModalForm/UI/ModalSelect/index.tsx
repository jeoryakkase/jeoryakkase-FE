import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@components/shadcn/ui/Select";

import ModalContainer from "../ModalContainer";

interface ModalSelectProps {
	title?: string;
	triggerPlaceholder: string;
	options: { value: string; label: string }[]; // 데이터형식에 따라 변경
	noOptionsMessage?: string;
	formChildren?: React.ReactNode;
}

const ModalSelect = ({
	title,
	triggerPlaceholder,
	options,
	noOptionsMessage,
	formChildren,
}: ModalSelectProps) => {
	return (
		<ModalContainer title={title}>
			{formChildren}
			<Select>
				<SelectTrigger className="">
					<SelectValue placeholder={triggerPlaceholder} />
				</SelectTrigger>
				{options && options.length > 0 ? (
					<SelectContent>
						<SelectGroup>
							{options.map((option) => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
									{/* 필요시 수정,삭제 옵션 추가 */}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				) : (
					<SelectContent>
						<SelectGroup>
							<SelectLabel>{noOptionsMessage}</SelectLabel>
						</SelectGroup>
					</SelectContent>
				)}
			</Select>
		</ModalContainer>
	);
};

export default ModalSelect;
