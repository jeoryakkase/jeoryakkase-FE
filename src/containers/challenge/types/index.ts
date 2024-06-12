export interface Challenge {
	id: number;
	title: string;
	imgs: { id: string; img: string }[];
	description: string;
	messages: string[];
}
