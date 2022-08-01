import { render, screen } from '@testing-library/react';

import Content from '@components/views/Hero/Content';

describe('Hero section Content', () => {
	it('should render', () => {
		render(<Content />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should contain paragraphs', () => {
		render(<Content />);

		expect(
			screen.getByText(
				'A React Developer focused on building responsive apps with clean codebase.'
			)
		).toBeVisible();
		expect(screen.getByText('I am looking forward to work with you!')).toBeVisible();
	});
});
