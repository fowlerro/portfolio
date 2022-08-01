import { render, screen } from '@testing-library/react';

import Content from '@components/views/About/Content';

describe('About section Content', () => {
	it('should render', () => {
		render(<Content />);

		expect(screen.getByRole('heading')).toBeInTheDocument();
	});

	it('should contain paragraphs', () => {
		render(<Content />);

		expect(
			screen.getByText(
				'My name is Kamil and I am a self-taught Web Developer specializing in React.'
			)
		).toBeVisible();
		expect(
			screen.getByText(
				'Programming has been my interest for about 5 years and I tried a lot of different things since then. When I came across Javascript and web development 2 years ago, I knew this is what I want to do in my life.'
			)
		).toBeVisible();
		expect(
			screen.getByText(
				'In those 2 years I learned Javascript, Typescript, NodeJS, React, Express and I tried a lot of other things like NestJS, GraphQL, can’t really say I know them well, but regardless of that, everything I tried in those 2 years was real fun for me and it still is!'
			)
		).toBeVisible();
		expect(
			screen.getByText(
				'Now I want to build responsive and snappy apps, keeping codebase clean and orginized.'
			)
		).toBeVisible();
	});
});
