import { render, screen } from '@testing-library/react';

import LinkedIn from '@components/icons/brands/LinkedIn';

describe('LinkedIn Icon Component', () => {
	it('should render', () => {
		render(<LinkedIn />);

		expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
	});
});
