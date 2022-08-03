import { CSSProperties } from 'react';
/* eslint-disable no-unused-vars */
import { createTheme, darken } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		body3: CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		body3?: CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		body3: true;
	}
}

// Create a theme instance.
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#59308C',
		},
		secondary: {
			main: '#8489B3',
		},
		text: {
			primary: '#FFF',
			secondary: '#8489B3',
		},
		background: {
			default: '#1C1D26',
			paper: '#262733',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 300,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

theme.typography.h1 = {
	fontFamily: 'Roboto',
	color: theme.palette.text.primary,
	fontSize: '2rem',
	letterSpacing: '1px',
	lineHeight: 1.25,
	fontWeight: 700,
	[theme.breakpoints.up('md')]: {
		fontSize: '2.25rem',
	},
};

theme.typography.h2 = {
	fontFamily: 'Roboto',
	fontSize: '1.75rem',
	lineHeight: 1.25,
	fontWeight: 700,

	[theme.breakpoints.up('md')]: {
		fontSize: '2rem',
	},
};

theme.typography.h3 = {
	fontFamily: 'Roboto',
	fontSize: '1.5rem',
	fontWeight: 500,
};

theme.typography.body1 = {
	fontFamily: 'Roboto',
	lineHeight: '1.5rem',
	letterSpacing: '1px',
	fontWeight: 400,
	fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
	[theme.breakpoints.up('md')]: {
		lineHeight: '1.75rem',
	},
};

theme.typography.body2 = {
	fontFamily: 'Roboto',
	fontSize: '0.875rem',
	lineHeight: '1.5rem',
	letterSpacing: '1px',
	fontWeight: 400,
	[theme.breakpoints.up('md')]: {
		fontSize: '1rem',
	},
};

theme.typography.body3 = {
	fontFamily: 'Roboto',
	fontSize: '0.75rem',
	lineHeight: '1.25rem',
	fontWeight: 400,
};

theme.typography.button = {
	fontFamily: 'Roboto',
	fontSize: '1.25rem',
	fontWeight: 700,
};

theme.components = {
	MuiTooltip: {
		styleOverrides: {
			tooltip: {
				backgroundColor: darken(theme.palette.background.default, 0.3),
			},
			arrow: {
				'::before': {
					backgroundColor: darken(theme.palette.background.default, 0.3),
				},
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			outlined: {
				padding: theme.spacing(1, 2),
			},
		},
	},
};

export default theme;
