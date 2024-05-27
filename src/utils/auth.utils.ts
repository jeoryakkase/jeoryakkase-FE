/* eslint-disable import/prefer-default-export */
export const logout = () => {
	localStorage.clear();
	window.location.href = `/`;
};
