import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Project from '@components/views/Project';
import type { Project as ProjectType } from '@utils/projects';
import renderWithMui from '@utils/renderWithMui';

const project: ProjectType = {
	name: 'test',
	shortDescription: 'shortDesc',
	longDescription: 'longDesc',
	thumbnail: 'thumbnailURL',
	githubURL: 'githubURL',
	screenshots: [
		{
			label: 'screen1',
			image: 'image1',
			url: 'screen1URL',
		},
		{
			label: 'screen2',
			image: 'image2',
			url: 'screen2URL',
		},
	],
	stack: [
		{
			label: 'html',
			icon: 'html',
		},
		{
			label: 'css',
			icon: 'css',
		},
	],
};

describe('Project page', () => {
	it('should render', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument();
	});

	it('should render BackToHome link', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		expect(screen.getByRole('link', { name: /back to home/i })).toBeVisible();
	});

	it('should render Content', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { name: project.name })).toBeVisible();
		expect(screen.getByText(project.longDescription)).toBeVisible();
	});

	it('should render Stack', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		expect(screen.getByRole('list', { name: /used technology/i })).toBeVisible();
	});

	it('should render Github link', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		const button = screen.getByRole('link', { name: /github/i });

		expect(button).toBeVisible();
		expect(button).toHaveAttribute('href', project.githubURL);
	});

	it('should render Screens', () => {
		renderWithMui(
			<MemoryRouter>
				<Project project={project} />
			</MemoryRouter>
		);

		expect(screen.getByRole('heading', { name: /screens/i })).toBeVisible();
	});
});
