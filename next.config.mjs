import path from "path";
import {
  fileURLToPath
} from "url";

const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  swcMinify: true,
  exportPathMap: () => ({
    "/": {
      page: "/"
    },
    "/challenge": {
      page: "/challenge"
    },
    // "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
    // "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
    // "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
  }),
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@services": path.resolve(__dirname, "src/services"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@lib": path.resolve(__dirname, "src/lib"),
    };
    config.cache = false;
    return config;
  },

};

export default nextConfig;