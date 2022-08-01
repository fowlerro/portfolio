import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';
import Hero from '@components/views/Hero';

describe('Hero section', () => {
	it('should render', () => {
		renderWithMui(<Hero />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should include button with correct link', () => {
		renderWithMui(<Hero />);

		expect(screen.getByRole('link', { name: /Contact me/i })).toHaveAttribute(
			'href',
			'#contact'
		);
	});
});
