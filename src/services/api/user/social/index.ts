import apiClient from "@lib/axiosConfig";

export async function getKakaoAuthCode({ code }: { code: string }) {
	return await apiClient.get(`/users/kakao-authcode?code=${code}`);
}

export async function getGoogleAuthCode({ code }: { code: string }) {
	return await apiClient.get(`/users/google-authcode?code=${code}`);
}
