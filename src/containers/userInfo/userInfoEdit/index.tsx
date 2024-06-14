"use client";

import { IoMdSettings } from "react-icons/io";

import { Button } from "@components/Button";

import DropdownMenuEdit from "./UI/DropDownEdit";
import UserInfoEditForm from "./UI/UserInfoEditForm";

const UserInfoEdit = () => {
	const item = [
		{ id: 1, label: "비밀번호 변경" },
		{ id: 2, label: "회원탈퇴" },
	];
	return (
		<div>
			<DropdownMenuEdit
				trigger={
					<Button variant="ghost" bgColor="transparent" shadow="transparent">
						<IoMdSettings />
					</Button>
				}
				menuItems={item}
			/>
			<UserInfoEditForm />
		</div>
	);
};

export default UserInfoEdit;
