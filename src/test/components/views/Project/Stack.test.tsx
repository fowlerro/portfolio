import { screen } from '@testing-library/react';

import Stack from '@components/views/Project/Stack';
import type { Project } from '@utils/projects';
import renderWithMui from '@utils/renderWithMui';

const stack: Project['stack'] = [
	{
		label: 'html',
		icon: 'html',
	},
	{
		label: 'css',
		icon: 'css',
	},
];

describe('Project page Stack component', () => {
	it('should render', () => {
		renderWithMui(<Stack stack={stack} />);

		expect(screen.getByRole('list', { name: /Used technology/i })).toBeInTheDocument();
	});

	it('should render items', () => {
		renderWithMui(<Stack stack={stack} />);

		expect(screen.getAllByRole('listitem')).toHaveLength(2);
		expect(screen.getByRole('listitem', { name: /html/i })).toBeVisible();
		expect(screen.getByRole('listitem', { name: /css/i })).toBeVisible();
		expect(screen.getByRole('img', { name: /html/i })).toBeVisible();
		expect(screen.getByRole('img', { name: /css/i })).toBeVisible();
	});
});
