import cloudinary from "cloudinary";

import { envConfig } from "./envConfig";

cloudinary.config({
	cloud_name: envConfig.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: envConfig.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	// api_secret: envConfig.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default cloudinary;
