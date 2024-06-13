import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "s3.ap-southeast-2.amazonaws.com",
				port: "",
				pathname: "/my.eliceproject.s3.bucket/**",
			},
		],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.mjs$/,
			include: /node_modules/,
			type: "javascript/auto",
		});

		config.resolve.alias = {
			...config.resolve.alias,
			"@components": path.resolve(__dirname, "src/components"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@app": path.resolve(__dirname, "src/app"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@constants": path.resolve(__dirname, "src/constants"),
			"@containers": path.resolve(__dirname, "src/containers"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@services": path.resolve(__dirname, "src/services"),
			"@stores": path.resolve(__dirname, "src/stores"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@lib": path.resolve(__dirname, "src/lib"),
		};
		return config;
	},
	async rewrites() {
		return [
			{
				source: "/_next/static/chunks/app/:path*/react-toastify.esm.mjs.map",
				destination: "/react-toastify/react-toastify.esm.mjs.map",
			},
			{
				source: "/_next/static/css/app/:path*/ReactToastify.css.map",
				destination: "/react-toastify/ReactToastify.css.map",
			},
		];
	},
};

export default nextConfig;
