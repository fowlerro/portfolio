import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';

import Icon from '@components/views/Technology/Icon';

describe('Technology Icon Component', () => {
	it('should render', () => {
		renderWithMui(<Icon icon="html" label="Test" />);

		expect(screen.getByRole('img', { name: /test/i })).toBeVisible();
	});

	it('should have label visible', () => {
		renderWithMui(<Icon icon="html" label="Test" />);

		expect(screen.getByText(/test/i)).toBeVisible();
	});
	it('should hide label', () => {
		renderWithMui(<Icon icon="html" label="Test" hideLabel />);

		expect(screen.getByRole('img', { name: /test/i })).toBeVisible();
		expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
	});
	it('should change size', () => {
		renderWithMui(<Icon icon="html" label="Test" size="69px" />);

		expect(screen.getByRole('img', { name: /test/i })).toHaveAttribute('width', '69px');
	});
});
