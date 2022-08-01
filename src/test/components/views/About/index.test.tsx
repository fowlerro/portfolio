import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';
import About from '@components/views/About';

describe('About section', () => {
	it('should render', () => {
		renderWithMui(<About />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should contain illustration', () => {
		renderWithMui(<About />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});

	it('should contain text', () => {
		renderWithMui(<About />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});
});
