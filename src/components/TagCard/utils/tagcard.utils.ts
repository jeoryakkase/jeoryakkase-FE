export const getBackgroundColor = (today: boolean, dueDate: boolean) => {
	if (!today) return "bg-point-lightred"; // 오늘 인증을 하지 않았을 경우
	if (dueDate) return "bg-main-lightblue"; // DueDate가 true일 경우
	return "bg-main-lightyellow"; // 그 외의 경우
};

export const getBadgeColor = (today: boolean, dueDate: boolean) => {
	if (!today) return "red";
	if (dueDate) return "midblue";
	return "yellow";
};

export const getMessages = (
	today: boolean,
	dueDate: boolean,
): [string, string] => {
	if (!today) {
		return ["포기하지 마세요", "오늘 인증을 진행해주세요!"];
	}
	if (dueDate) {
		return ["내일이면 완주", "오늘 인증을 완료했습니다"];
	}
	return ["잘하고 있어요!", "오늘 인증을 완료했습니다"];
};
