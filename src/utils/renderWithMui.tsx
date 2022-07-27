import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import { ThemeProvider } from '@mui/material';

import theme from '@styles/theme';

export default function renderWithMui(
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'queries'>
): RenderResult {
	const rendered = render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
	return {
		...rendered,
		rerender: (
			rerenderUI: React.ReactElement,
			rerenderOptions?: Omit<RenderOptions, 'queries'>
		): RenderResult =>
			renderWithMui(rerenderUI, { container: rendered.container, ...rerenderOptions }),
	};
}
