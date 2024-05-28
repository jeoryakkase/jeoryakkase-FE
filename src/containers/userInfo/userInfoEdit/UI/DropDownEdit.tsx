import { IoMdSettings } from "react-icons/io";

import { Button } from "@components/shadcn/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/shadcn/ui/DropdownMenu";

function DropdownMenuEdit() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<IoMdSettings />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuGroup>
					<DropdownMenuItem className="justify-center ">
						비밀번호 변경
					</DropdownMenuItem>
					<DropdownMenuItem className="justify-center">
						회원탈퇴
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default DropdownMenuEdit;
