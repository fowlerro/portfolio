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
				'Programming has been my interest since 2017, I tried a lot of different things through my journey and when I came across Javascript and web development about 3 years later, I knew this is what I want to do in my life.'
			)
		).toBeVisible();
		expect(
			screen.getByText(
				'I am mainly focused on frontend development, specializing in React and React Native, but I can also do well on backend. I know NodeJS, Express, NestJS, GraphQL, I can work with databases, I am keen to try and learn new technologies and areas :D'
			)
		).toBeVisible();
		expect(
			screen.getByText(
				'Now I want to build responsive and snappy apps, keeping codebase clean and orginized.'
			)
		).toBeVisible();
	});
});
