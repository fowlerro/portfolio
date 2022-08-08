import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import EmailLink from '@components/views/Contact/EmailLink';

describe('Contact section email link', () => {
	it('should render', () => {
		render(<EmailLink />);

		expect(screen.getByRole('link', { name: /Write me an e-mail/i })).toBeVisible();
	});

	it('should have correct href', () => {
		render(<EmailLink />);

		expect(screen.getByRole('link')).toHaveAttribute(
			'href',
			'mailto:kami.wenta@gmail.com'
		);
	});

	it('should display email', () => {
		render(<EmailLink />);

		expect(screen.getByRole('link')).toHaveTextContent('kami.wenta@gmail.com');
	});

	it('should be focusable', async () => {
		const user = userEvent.setup();
		render(<EmailLink />);

		await user.tab();

		expect(screen.getByRole('link')).toHaveFocus();
	});
});
