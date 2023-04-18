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
