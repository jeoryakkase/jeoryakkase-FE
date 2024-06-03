const useLogout = () => {
	const logout = () => {
		localStorage.clear();
		window.location.href = `/`;
	};

	return logout;
};

export default useLogout;
