import { render, screen } from '@testing-library/react';

import Github from '@components/icons/brands/Github';

describe('Github Icon Component', () => {
	it('should render', () => {
		render(<Github />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
