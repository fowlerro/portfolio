import { forwardRef } from 'react';

import { Box, styled, Typography } from '@mui/material';

import projects from '@utils/projects';

import ProjectCard from './ProjectCard';

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginBlock: '8rem',
	marginInline: theme.spacing(4),
	scrollMarginTop: '8rem',

	[theme.breakpoints.up('md')]: {
		marginInline: theme.spacing(8),
		scrollMarginTop: '16rem',
	},
}));

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<StyledSection ref={ref} id="projects">
			<Typography variant="h2">Projects</Typography>
			<Box mt={4} display="flex" justifyContent="center">
				{projects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</Box>
		</StyledSection>
	);
});

export default Projects;
