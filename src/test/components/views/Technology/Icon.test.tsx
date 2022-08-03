import { screen } from '@testing-library/react';

import renderWithMui from '@utils/renderWithMui';

import Icon from '@components/views/Technology/Icon';

import htmlIcon from '@assets/icons/html.svg';

describe('Technology Icon Component', () => {
	it('should render', () => {
		renderWithMui(<Icon icon={htmlIcon} label="Test" />);

		expect(screen.getByRole('listitem', { name: /test/i })).toBeInTheDocument();
	});
});
