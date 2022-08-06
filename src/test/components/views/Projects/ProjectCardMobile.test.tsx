import { render, screen } from '@testing-library/react';

import ProjectCardMobile from '@components/views/Projects/ProjectCardMobile';
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

describe('Projects section Card Mobile', () => {
	it('should render', () => {
		render(<ProjectCardMobile {...project} />);

		expect(
			screen.getByRole('img', { name: /Project's screenshot/i })
		).toBeInTheDocument();
	});
	it('should have correct urls', () => {
		render(<ProjectCardMobile {...project} />);

		expect(screen.getByRole('link', { name: /See more/i })).toHaveAttribute(
			'href',
			`/${project.name}`
		);
		expect(screen.getByRole('link', { name: /Github repository link/i })).toHaveAttribute(
			'href',
			project.githubURL
		);
	});
	it('should render typography', () => {
		render(<ProjectCardMobile {...project} />);

		expect(screen.getByRole('heading', { name: project.name })).toBeVisible();
		expect(screen.getByText(project.shortDescription)).toBeVisible();
	});
	it('should render thumbnail', () => {
		render(<ProjectCardMobile {...project} />);

		expect(screen.getByRole('img', { name: /Project's screenshot/i })).toBeVisible();
	});
	it('should render stack', () => {
		render(<ProjectCardMobile {...project} />);

		expect(screen.getByRole('list', { name: /used technology/i })).toBeVisible();
		expect(screen.getByRole('listitem', { name: /html/i })).toBeVisible();
	});
});
