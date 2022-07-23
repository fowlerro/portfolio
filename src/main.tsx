import React from 'react';
import ReactDOM from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';

import App from './App';

const globalStyles = <GlobalStyles />;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{globalStyles}
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
