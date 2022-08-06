import { render, screen } from '@testing-library/react';

import Content from '@components/views/Project/Content';

const props = {
	name: 'test',
	longDescription: 'description',
};

describe('Project page Content component', () => {
	it('should render', () => {
		render(<Content {...props} />);

		expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();
	});

	it('should render description paragraph', () => {
		render(<Content {...props} />);

		expect(screen.getByText(props.longDescription)).toBeVisible();
	});
});
