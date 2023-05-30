/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			inter: 'Inter, sans',
		},
		extend: {
			colors: {
				background: '#d8e1f3',
				white: '#ffffff',
				text: '#01080e',
				primary: '#0c5ca6',
				secondary: '#ecf5fe',
				accent: '#0e69be',
				success: '#11b464',
				warning: '#e9ce0f',
				danger: '#fc0606',
			},
		},
	},
	plugins: [],
};
