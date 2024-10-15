import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	'node_modules/shadcn-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			fjalla: ['Fjalla One', 'sans-serif'],
		  },
    },
  },
  plugins: [],
};

export default config;
