import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';
import Contact from '@components/views/Contact';

jest.mock('@emailjs/browser');

describe('Contact section', () => {
	it('should render', () => {
		renderWithMui(<Contact />);

		expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();
	});
	it('should contain form', () => {
		renderWithMui(<Contact />);

		expect(screen.getByRole('form')).toBeVisible();
	});
});
