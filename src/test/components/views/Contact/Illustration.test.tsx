import { render, screen } from '@testing-library/react';

import Illustration from '@components/views/Contact/Illustration';

describe('Contact section illustration Component', () => {
	it('should render', () => {
		render(<Illustration />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
