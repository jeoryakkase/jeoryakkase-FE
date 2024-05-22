/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      "main-lightyellow": "#FEFFE0",
      "main-yellow": "#FDDB3A",
      "main-lightblue": "#C8E4FE",
      "main-midblue": "#A5AEFF",
      "main-darkblue": "#6B76FF",
      "main-darkgray": "#41444B",
      "main-navy": "#0A174E",
      "point-lightred": "#FDB085",
      "sub-gray1": "#F5F5F5",
      "sub-gray2": "#D9D9D9",
      "sub-gray3": "#C9C9C9",
      "sub-gray4": "#A3A3A3",
      primary: {
        DEFAULT: "#FDDB3A",
        hover: "#fbbf24",
      },
      secondary: {
        default: "#0A174E",
        hover: "#2563eb",
      },
    },
    fontFamily: {
      pretandard: ["var(--font-pretandard)", "sans-serif"],
    },
    fontWeight: {
      thin: 300,
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      sm: '16px',
      base: '18px',
      lg: '20px',
      xl: '24px',
      xxl: '30px',
      xxxl: '40px',
    },
    boxShadow: {
      'custom-default': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'custom-inner': 'inset 0 4px 6px rgba(0, 0, 0, 0.1)',
    },

    zIndex: {
      nav: "999",
      modalBackground: "998",
      modalContainer: "1",
      select: "500",
    },
  },
};
export const plugins = [];