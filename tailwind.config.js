/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#03A9F4',
				black: '#12101C',
				lightGray: '#343240',
				lightRed: '#E2D7D7',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'main-section': "url('/images/mainBackground.png')",
				advertisingBg: "url('/images/advertisingBg.png')",
			},
		},
	},
	plugins: [],
};
