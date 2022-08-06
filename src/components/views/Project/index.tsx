import { Button, styled } from '@mui/material';

import Github from '@components/icons/brands/Github';
import { Project as ProjectType } from '@utils/projects';

import BackToHome from './BackToHome';
import Content from './Content';
import Screens from './Screens';
import Stack from './Stack';

interface ProjectProps {
	project: ProjectType;
}

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'left',
	marginBlock: '4rem',
	marginInline: theme.spacing(4),

	[theme.breakpoints.up('md')]: {
		marginInline: theme.spacing(8),
	},
}));

export default function Project({ project }: ProjectProps): JSX.Element {
	return (
		<StyledSection>
			<BackToHome />
			<Content name={project.name} longDescription={project.longDescription} />
			<Stack stack={project.stack} />
			<Button
				variant="contained"
				color="secondary"
				startIcon={<Github />}
				href={project.githubURL}
				target="_blank"
				rel="noopener"
				sx={{
					color: (theme) => theme.palette.background.default,
					px: 2,
					py: 1,
					marginTop: '2rem',
				}}
			>
				Github
			</Button>
			<Screens screenshots={project.screenshots} />
		</StyledSection>
	);
}
