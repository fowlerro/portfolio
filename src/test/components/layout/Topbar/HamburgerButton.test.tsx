import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import HamburgerButton from '@components/layout/Topbar/HamburgerButton';

describe('Topbar HamburgerButton Component', () => {
	const onClick = jest.fn();
	it('should render', () => {
		render(<HamburgerButton expanded={false} onClick={onClick} />);

		expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument();
	});

	it('should call function onClick', async () => {
		const user = userEvent.setup();
		render(<HamburgerButton expanded={false} onClick={onClick} />);

		await user.click(screen.getByRole('button', { name: /open navigation/i }));

		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
