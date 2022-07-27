import { render, screen } from '@testing-library/react';

import Socials from '@components/layout/Topbar/Socials';

describe('Topbar Social links', () => {
	it('should render', () => {
		render(<Socials />);

		expect(screen.getByRole('link', { name: /Github/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Discord/i })).toBeInTheDocument();
	});

	it('should contain correct links', () => {
		render(<Socials />);

		expect(screen.getByRole('link', { name: /Github/i })).toHaveAttribute(
			'href',
			'https://github.com/fowlerro/'
		);
		expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute(
			'href',
			'https://linkedin.com/in/kamilwenta/'
		);
		expect(screen.getByRole('link', { name: /Discord/i })).toHaveAttribute(
			'href',
			'https://discordapp.com/users/313346190995619841/'
		);
	});
});
