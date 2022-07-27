import { render, screen } from '@testing-library/react';

import Hamburger from '@components/icons/Hamburger';

describe('Hamburger Icon Component', () => {
	it('should render', () => {
		render(<Hamburger expanded={false} />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
