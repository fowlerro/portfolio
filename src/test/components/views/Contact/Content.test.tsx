import { render, screen } from '@testing-library/react';

import Content from '@components/views/Contact/Content';

describe('Contact section Content', () => {
	it('should render', () => {
		render(<Content />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should contain paragraphs', () => {
		render(<Content />);

		expect(
			screen.getByText('Want to work together or have any questions?')
		).toBeVisible();
		expect(screen.getByText('Feel free to contact me!')).toBeVisible();
	});
});
