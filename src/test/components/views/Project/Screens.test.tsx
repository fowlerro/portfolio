import Screens from '@components/views/Project/Screens';
import { render, screen } from '@testing-library/react';

const screenshots = [
	{
		label: 'test',
		image: 'testImage',
		url: 'testURL',
	},
	{
		label: 'test2',
		image: 'testImage2',
		url: 'testURL2',
	},
];

describe('Project page Screens section', () => {
	it('should render', () => {
		render(<Screens screenshots={screenshots} />);

		expect(screen.getByRole('heading', { name: 'Screens' })).toBeInTheDocument();
	});

	it('should render screenshots', () => {
		render(<Screens screenshots={screenshots} />);

		expect(screen.getAllByRole('img')).toHaveLength(2);
		expect(screen.getByRole('img', { name: screenshots[0].label })).toBeVisible();
		expect(screen.getByRole('img', { name: screenshots[1].label })).toBeVisible();
	});
});
