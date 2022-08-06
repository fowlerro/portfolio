import { render, screen } from '@testing-library/react';

import BrowserScreenshot from '@components/views/Project/BrowserScreenshot';

const props = {
	label: 'test',
	image: 'testImage',
	url: 'testURL',
};

describe('Project page BrowserScreenshot component', () => {
	it('should render', () => {
		render(<BrowserScreenshot {...props} />);

		expect(screen.getByRole('img', { name: props.label })).toBeInTheDocument();
	});

	it('should render browser bar', () => {
		render(<BrowserScreenshot {...props} />);

		expect(screen.getByText(props.url)).toBeVisible();
	});
});
