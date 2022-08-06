import { render, screen } from '@testing-library/react';

import ProjectCardDesktop from '@components/views/Projects/ProjectCardDesktop';
import type { ProjectCardProps } from '@components/views/Projects/ProjectCard';

const project: ProjectCardProps = {
	name: 'test',
	thumbnail: 'testThumbnailURL',
	shortDescription: 'description',
	stack: [
		{
			label: 'html',
			icon: 'html',
		},
	],
	githubURL: 'githubURL',
};

describe('Projects section Card Desktop', () => {
	it('should render', () => {
		render(<ProjectCardDesktop {...project} />);

		expect(
			screen.getByRole('img', { name: /project's screenshot/i })
		).toBeInTheDocument();
	});
	it('should have correct urls', () => {
		render(<ProjectCardDesktop {...project} />);

		expect(screen.getByRole('link', { name: /See more/i })).toHaveAttribute(
			'href',
			`/${project.name}`
		);
		expect(screen.getByRole('link', { name: /Github repository link/i })).toHaveAttribute(
			'href',
			project.githubURL
		);
	});
	it('should render image', () => {
		render(<ProjectCardDesktop {...project} />);

		expect(screen.getByRole('img', { name: /project's screenshot/i })).toBeVisible();
	});
});
