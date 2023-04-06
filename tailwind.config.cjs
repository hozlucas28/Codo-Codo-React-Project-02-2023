/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				zoomIn: 'zoomIn 0.5s ease-in-out',
			},

			keyframes: {
				zoomIn: {
					'0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
					'50%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
}
