import apiClient from "@lib/axiosConfig";

export async function getKakaoAuthCode({ code }: { code: string }) {
	return apiClient.get(`/kakao-authcode?code=${code}`);
}

export async function getGoogleAuthCode({ code }: { code: string }) {
	return apiClient.get(`/google-authcode?code=${code}`);
}
