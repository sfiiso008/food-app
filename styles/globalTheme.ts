import { createTheme } from '@mui/material/styles';

const GlobalTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					fontSize: '0.875rem',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					fontSize: '62.5%',
					'@media (max-width:1000px)': {
						fontSize: '50%',
					},
					'@media (max-width:550px)': {
						fontSize: '40%',
					},
				},
				'*': {
					margin: 0,
					padding: 0,
					boxsizing: 'border-box',
				},
				fontFamily: ['Nunito', 'san-serif'].join(','),
			},
		},
	},
});

GlobalTheme.typography.h1 = {
	fontSize: '12rem',
	fontWeight: 900,
	color: '#fff',
	textAlign: 'center',
	textTransform: 'capitalize',
	letterSpacing: '0.5rem',
	textshadow: '0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.5)',
	'@media (max-width:1000px)': {
		fontSize: '9rem',
		margin: '0 5rem',
	},
	'@media (max-width:700px)': {
		fontSize: '7rem',
		margin: '0 10rem',
	},
};

GlobalTheme.typography.h3 = {
	fontSize: '3rem',
	fontWeight: 900,
	textTransform: 'uppercase',
	letterSpacing: '0.5rem',
	color: '#111',
	margin: '2rem 0',
	textShadow: '0.15rem 0.15rem 0.15rem #000',
};

GlobalTheme.typography.h2 = {
	fontSize: '4rem',
	fontWeight: 900,
	color: '#a79a2d',
};

export default GlobalTheme;
