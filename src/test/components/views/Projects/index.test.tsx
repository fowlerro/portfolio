import { screen } from '@testing-library/react';

import Projects from '@components/views/Projects';
import renderWithMui from '@utils/renderWithMui';

describe('Projects section', () => {
	it('should render', () => {
		renderWithMui(<Projects />);

		expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
	});
	it('should render header', () => {
		renderWithMui(<Projects />);

		expect(screen.getByRole('heading', { name: /Projects/i })).toBeVisible();
	});
	it('should render projects', () => {
		renderWithMui(<Projects />);

		expect(screen.getByRole('heading', { name: /Lunaris/i })).toBeVisible();
	});
});
