"use client";

import { useForm, FormProvider } from "react-hook-form";

import Flex from "@components/Flex";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@components/shadcn/ui/Form";
import { Input } from "@components/shadcn/ui/Input";

type FormValues = {
	title: string;
	category: string;
	photo: FileList;
	content: string;
};

const Write = () => {
	const methods = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 p-4">
				<Flex className="w-full flex">
					<FormField
						name="title"
						control={methods.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>제목</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="제목을 입력하세요"
										{...field}
										className="w-full p-2 border rounded"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="category"
						control={methods.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>카테고리</FormLabel>
								<FormControl>
									<select {...field} className="w-full p-2 border rounded">
										<option value="option1">염전</option>
										<option value="option2">짠팁</option>
									</select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</Flex>
				<FormField
					name="photo"
					control={methods.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>사진</FormLabel>
							<FormControl>
								<Input
									type="file"
									accept="image/*"
									className="w-full p-2 border rounded"
									onChange={(e) => field.onChange(e.target.files)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					name="content"
					control={methods.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>내용</FormLabel>
							<FormControl>
								<textarea
									placeholder="내용을 입력하세요"
									{...field}
									className="w-full p-2 border rounded h-32"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex justify-center">
					<button
						type="submit"
						className="bg-main-yellow text-white px-4 py-2 rounded hover:bg-yellow-600"
					>
						등록
					</button>
				</div>
			</form>
		</FormProvider>
	);
};

export default Write;