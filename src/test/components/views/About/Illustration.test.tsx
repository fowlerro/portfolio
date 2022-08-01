import { screen } from '@testing-library/react';

import Illustration from '@components/views/About/Illustration';
import renderWithMui from '@utils/renderWithMui';

describe('About section illustration Component', () => {
	it('should render', () => {
		renderWithMui(<Illustration />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
