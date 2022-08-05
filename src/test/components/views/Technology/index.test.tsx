import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';

import Technology from '@components/views/Technology';

describe('Technology section', () => {
	it('should render', () => {
		renderWithMui(<Technology />);

		expect(
			screen.getByRole('heading', { name: 'Technology I use!' })
		).toBeInTheDocument();
	});
	it('should contain icons', () => {
		renderWithMui(<Technology />);

		const icons = screen.getAllByRole('listitem');
		expect(icons).not.toHaveLength(0);
		icons.forEach((icon) => {
			expect(icon).toBeVisible();
		});
	});
});
