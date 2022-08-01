import { screen } from '@testing-library/react';

import Illustration from '@components/views/Hero/Illustration';
import renderWithMui from '@utils/renderWithMui';

describe('Hero section illustration Component', () => {
	it('should render', () => {
		renderWithMui(<Illustration />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
