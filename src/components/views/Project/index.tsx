import { Button, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Github from '@components/icons/brands/Github';
import { Project as ProjectType } from '@utils/projects';

import BackToHome from './BackToHome';
import Content from './Content';
import Screens from './Screens';
import Stack from './Stack';

interface ProjectProps {
	project: ProjectType;
}

const StyledSection = styled('section')({
	textAlign: 'left',
	marginBlock: '4rem',
});

export default function Project({ project }: ProjectProps): JSX.Element {
	return (
		<StyledSection>
			<Grid
				container
				justifyContent="center"
				direction={['column', null, 'row-reverse']}
				sx={{
					marginInline: [4, null, 8],
				}}
			>
				<Grid xs={12} mdOffset={1}>
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
				</Grid>
				<Grid xs={12}>
					<Screens screenshots={project.screenshots} />
				</Grid>
			</Grid>
		</StyledSection>
	);
}
