"use client";

import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { Button } from "@components/Button";
import { Calendar } from "@components/shadcn/ui/Calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/shadcn/ui/Popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import cn from "@utils/classnames.utils";

import ModalContainer from "../ModalContainer";

interface ModalDateRangeProps {
	title?: string;
	value?: DateRange; // 날짜 타입(from ~ to)
	onChange?: (date: DateRange | undefined) => void;
}

const ModalDateRange = ({ title, value, onChange }: ModalDateRangeProps) => {
	return (
		<ModalContainer title={title}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant="outline"
						bgColor="white"
						className={cn(
							"w-[300px] justify-start text-left font-normal",
							!value && "text-muted-foreground p-[20px]",
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{/* eslint-disable-next-line no-nested-ternary */}
						{value?.from ? (
							value.to ? (
								<>
									{format(value.from, "LLL dd, y")} -{" "}
									{format(value.to, "LLL dd, y")}
								</>
							) : (
								format(value.from, "LLL dd, y")
							)
						) : (
							<span>날짜를 선택해주세요.</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={value?.from}
						selected={value}
						onSelect={onChange}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</ModalContainer>
	);
};

export default ModalDateRange;
