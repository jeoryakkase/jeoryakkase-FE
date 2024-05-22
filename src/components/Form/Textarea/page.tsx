import Container from "../Container/page";

interface TextareaProps<T> {
	title?: string;
	placeholder: string;
}

export const Textarea = <T,>({ title, placeholder }: TextareaProps<T>) => {
	return (
		<Container title={title}>
			<textarea
				className={`px-[20px] py-[10px] w-full h-[110px] rounded-[20px] shadow-custom-default focus:outline-none focus:ring-2 focus:ring-main-yellow placeholder:text-sm resize-none`}
				placeholder={placeholder}
			/>
		</Container>
	);
};
