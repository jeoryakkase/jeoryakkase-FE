import { IoMdSettings } from "react-icons/io";

import DropdownMenuEdit from "./UI/DropDownEdit";
import UserInfoEditForm from "./UI/UserInfoEditForm";

const UserInfoEdit = () => {
	const item = [
		{ id: 1, label: "비밀번호 변경" },
		{ id: 2, label: "회원탈퇴" },
	];
	return (
		<div>
			<DropdownMenuEdit trigger={<IoMdSettings />} menuItems={item} />
			<UserInfoEditForm />
		</div>
	);
};

export default UserInfoEdit;
