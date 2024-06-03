import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

// eslint-disable-next-line import/prefer-default-export
export const { colors } = fullConfig.theme;
