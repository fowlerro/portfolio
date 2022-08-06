import { forwardRef } from 'react';

import { Box, styled, Typography } from '@mui/material';

import lunarisThumbnail from '@assets/projects/lunaris/home_page.png';

import ProjectCard, { ProjectCardProps } from './ProjectCard';

const projects: ProjectCardProps[] = [
	{
		thumbnail: lunarisThumbnail,
		name: 'Lunaris',
		shortDescription: `Lunaris is a discord bot created to provide most of needed options to manage discord servers.
					I think discord servers have too much different bots so I came up with an idea to make one large bot, which could replace most of them`,
		stack: [
			{ label: 'NodeJS', icon: 'node' },
			{ label: 'React', icon: 'react' },
			{ label: 'Material UI', icon: 'materialui' },
			{ label: 'Express', icon: 'express' },
			{ label: 'discordJS', icon: 'discordjs' },
			{ label: 'MongoDB', icon: 'mongodb' },
		],
		githubURL: 'https://github.com/fowlerro/lunaris.git',
	},
];

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginBlock: '8rem',
	marginInline: theme.spacing(4),

	[theme.breakpoints.up('md')]: {
		marginInline: theme.spacing(8),
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
