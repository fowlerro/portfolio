import { RefObject } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Drawer from '@components/layout/Topbar/Drawer';
import renderWithMui from '@utils/renderWithMui';

describe('Topbar Drawer Component', () => {
	const onClose = jest.fn();
	const appBarRefMock: RefObject<HTMLDivElement> = {
		current: null,
	};
	it('should render', () => {
		renderWithMui(
			<Drawer appBarRef={appBarRefMock} open onClose={onClose} visibleSection={null} />
		);

		expect(screen.getByRole('presentation')).toBeInTheDocument();
	});

	it('should not be visible when open is false', () => {
		renderWithMui(
			<Drawer
				appBarRef={appBarRefMock}
				open={false}
				onClose={onClose}
				visibleSection={null}
			/>
		);

		expect(screen.getByRole('presentation', { hidden: true })).not.toBeVisible();
	});

	it('should contain navigation links', () => {
		renderWithMui(
			<Drawer appBarRef={appBarRefMock} open onClose={onClose} visibleSection={null} />
		);

		expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
	});

	it('should call onClose after clicking links', async () => {
		const user = userEvent.setup();
		renderWithMui(
			<Drawer appBarRef={appBarRefMock} open onClose={onClose} visibleSection={null} />
		);

		await user.click(screen.getAllByRole('link')[0]);

		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should call onClose after clicking outside of the drawer', async () => {
		const user = userEvent.setup();
		renderWithMui(
			<Drawer appBarRef={appBarRefMock} open onClose={onClose} visibleSection={null} />
		);

		await user.click(document.body);

		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
