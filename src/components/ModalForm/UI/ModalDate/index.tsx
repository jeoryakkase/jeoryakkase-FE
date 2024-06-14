"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import cn from "@utils/classnames.utils";
import { Button } from "@components/shadcn/ui/Button";
import { Calendar } from "@components/shadcn/ui/Calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@components/shadcn/ui/Popover";
interface ModalDateProps {
	value?: Date;
	onChange: (date: Date | undefined) => void;
}

const ModalDate = ({ value, onChange }: ModalDateProps) => {
	const [date, setDate] = React.useState<Date | undefined>(value);
	const handleDateChange = (newDate: Date | undefined) => {
		setDate(newDate);
		onChange(newDate);
	};
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[200px] justify-start text-left font-normal",
						!date && "text-muted-foreground",
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>날짜를 선택해주세요.</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={date}
					onSelect={handleDateChange}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

export default ModalDate;
