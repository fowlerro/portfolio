import { render, screen } from '@testing-library/react';

import ProjectCard from '@components/views/Projects/ProjectCard';
import type { ProjectCardProps } from '@components/views/Projects/ProjectCard';

import useIsDesktop from '@hooks/useIsDesktop';

jest.mock('@hooks/useIsDesktop', () => ({
	__esModule: true,
	default: jest.fn(() => true),
}));

const useIsDesktopMock = useIsDesktop as jest.MockedFunction<typeof useIsDesktop>;

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

describe('Projects section Card', () => {
	it('should render mobile version', () => {
		useIsDesktopMock.mockReturnValue(false);
		render(<ProjectCard {...project} />);

		expect(
			screen.getByRole('img', { name: /project's screenshot/i })
		).toBeInTheDocument();
	});
	it('should render desktop version', () => {
		useIsDesktopMock.mockReturnValue(true);
		render(<ProjectCard {...project} />);

		expect(
			screen.getByRole('img', { name: /project's screenshot/i })
		).toBeInTheDocument();
	});
});
