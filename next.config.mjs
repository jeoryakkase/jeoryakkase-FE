import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/**",
			},
		],
	},
	webpack: (config) => {
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
};

export default nextConfig;
