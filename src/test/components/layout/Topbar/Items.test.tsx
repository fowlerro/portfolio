import { screen } from '@testing-library/react';

import Items from '@components/layout/Topbar/Items';
import renderWithMui from '@utils/renderWithMui';

describe('Topbar Items Component', () => {
	it('should render', () => {
		renderWithMui(<Items visibleSection={null} />);

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('should contain link elements', () => {
		renderWithMui(<Items visibleSection={null} />);

		expect(screen.getAllByRole('link')).toHaveLength(3);
	});

	it('should contain correct links', () => {
		renderWithMui(<Items visibleSection={null} />);

		expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
			'href',
			'#about'
		);
		expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
			'href',
			'#projects'
		);
		expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
			'href',
			'#contact'
		);
	});
});
