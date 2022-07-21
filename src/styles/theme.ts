/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';
import { CSSProperties } from 'react';

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
			secondary: 'secondary',
		},
		background: {
			default: '#1C1D26',
			paper: '#262733',
		},
	},
});

theme.typography.h1 = {
	fontFamily: 'Roboto',
	color: theme.palette.text.primary,
	fontSize: '2rem',
	fontWeight: 700,
	[theme.breakpoints.up('md')]: {
		fontSize: '2.25rem',
	},
};

theme.typography.h2 = {
	fontFamily: 'Roboto',
	fontSize: '1.5rem',
	fontWeight: 500,
};

theme.typography.h3 = {
	fontFamily: 'Roboto',
	fontSize: '1.5rem',
	fontWeight: 500,
};

theme.typography.body1 = {
	fontFamily: 'Roboto',
	fontSize: '1.125rem',
	lineHeight: '1.25rem',
	fontWeight: 400,
	[theme.breakpoints.up('md')]: {
		fontSize: '1.5rem',
		lineHeight: '1.75rem',
	},
};

theme.typography.body2 = {
	fontFamily: 'Roboto',
	fontSize: '0.875rem',
	lineHeight: '1.5rem',
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

export default theme;
