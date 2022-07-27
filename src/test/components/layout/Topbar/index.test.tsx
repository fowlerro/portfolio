import { screen } from '@testing-library/react';

import Topbar from '@components/layout/Topbar';
import renderWithMui from '@utils/renderWithMui';

import useIsDesktop from '@hooks/useIsDesktop';

jest.mock('@hooks/useIsDesktop', () => ({
	__esModule: true,
	default: jest.fn(() => true),
}));

const useIsDesktopMock = useIsDesktop as jest.MockedFunction<typeof useIsDesktop>;

describe('Topbar Component', () => {
	it('should render', () => {
		renderWithMui(<Topbar visibleSection={null} />);

		expect(screen.getByRole('banner')).toBeInTheDocument();
	});

	it('should render navigation links', () => {
		renderWithMui(<Topbar visibleSection={null} />);

		expect(screen.getByRole('navigation')).toBeInTheDocument();
	});

	it('should render socials links', () => {
		renderWithMui(<Topbar visibleSection={null} />);

		expect(screen.getByRole('link', { name: /Github/i })).toBeInTheDocument();
	});

	it('should not render hamburger button on desktop', () => {
		useIsDesktopMock.mockReturnValue(true);
		renderWithMui(<Topbar visibleSection={null} />);

		expect(
			screen.queryByRole('button', { name: /open navigation/i })
		).not.toBeInTheDocument();
	});

	it('should render hamburger button on mobile', () => {
		useIsDesktopMock.mockReturnValue(false);
		renderWithMui(<Topbar visibleSection={null} />);

		expect(screen.getByRole('button', { name: /open navigation/i })).toBeInTheDocument();
	});
});
