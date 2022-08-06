import { render, screen } from '@testing-library/react';

import BackToHome from '@components/views/Project/BackToHome';
import { MemoryRouter } from 'react-router-dom';

describe('Project page BackToHome component', () => {
	it('should render', () => {
		render(
			<MemoryRouter>
				<BackToHome />
			</MemoryRouter>
		);

		expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
	});

	it('should have correct href', () => {
		render(
			<MemoryRouter>
				<BackToHome />
			</MemoryRouter>
		);

		expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute(
			'href',
			'/'
		);
	});
});
