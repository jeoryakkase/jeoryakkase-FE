/** @type {import('tailwindcss').Config} */

import { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
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
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			fontFamily: {
				pretandard: ["var(--font-pretandard)", "sans-serif"],
			},
			fontWeight: {
				thin: "300",
				regular: "400",
				semibold: "600",
				bold: "700",
			},
			fontSize: {
				s: "12px",
				sm: "16px",
				base: "18px",
				lg: "20px",
				xl: "24px",
				xxl: "30px",
				xxxl: "40px",
			},
			boxShadow: {
				default: "0 2px 4px rgba(0, 0, 0, 0.25)",
				"custom-default": "0 4px 6px rgba(0, 0, 0, 0.1)",
				"custom-inner": "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
			},
			zIndex: {
				nav: "999",
				modalBackground: "998",
				modalContainer: "1",
				select: "500",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
