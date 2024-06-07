import type { NextApiRequest, NextApiResponse } from "next";

import cloudinary from "@lib/cloudinaryConfig";
import showToast from "@lib/toastConfig";

const uploadImage = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		const { image } = req.body;
		if (!image) {
			return res
				.status(400)
				.json(showToast({ type: "error", message: "이미지좀넣어라" }));
		}
		try {
			const result = await cloudinary.uploader.upload(image, {
				upload_preset: "salt_image_upload",
				transformation: [{ format: "webp" }],
			});
			res.status(200).json(result);
		} catch (error) {
			res.status(500).json(
				showToast({
					type: "error",
					message: "cloudinary 이미지 업로드 에러",
				}),
			);
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
};

export default uploadImage;
