/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		  },
		
		  fontFamily: {
			content: ['Open sans', 'sans-serif'],
			title: ['Syne', 'sans-serif'],
		  },
		extend: { 
			backgroundImage: {
				'custom-gradient':'linear-gradient(to left top, #746dc2, #7e76cd, #8880d7, #9389e2, #9d93ed, #a79cf2, #b1a4f7, #bbadfc, #c6b7fd, #d1c2fd, #dbccfe, #e4d7ff)'
			},
			boxShadow: {
				'custom-shadow': 'rgba(228, 215, 255, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.2) 0px 8px 16px -8px',
				'btn-shadow': 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;',
				'card-shadow': 'rgba(0, 0, 0, 0.15) 0px 25px 20px -20px;',
			},
			spacing: {
				'sp-16': '1rem',
				'sp-32': '2rem',
				'sp-48': '3rem',
				'sp-64': '4rem',
				'sp-96': '6rem',
				'sp-128': '8rem',
				'sp-256': '16rem',
			  }
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
