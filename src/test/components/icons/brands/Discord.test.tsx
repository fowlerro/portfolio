import { render, screen } from '@testing-library/react';

import Discord from '@components/icons/brands/Discord';

describe('Discord Icon Component', () => {
	it('should render', () => {
		render(<Discord />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
