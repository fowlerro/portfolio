import { forwardRef } from 'react';

import { styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Illustration from './Illustration';
import Content from './Content';

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginTop: '16rem',
	scrollMarginTop: '8rem',

	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
		scrollMarginTop: '20rem',
	},
}));

const About = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<StyledSection ref={ref} id="about">
			<Grid
				container
				justifyContent="flex-start"
				direction={['column', null, 'row']}
				sx={{
					marginInline: [4, null, 8],
					marginTop: ['10rem', null, '15rem'],
				}}
			>
				<Grid xs={12} mdOffset={1} md={3}>
					<Illustration />
				</Grid>
				<Grid xs={12} mdOffset={1} md={6}>
					<Content />
				</Grid>
			</Grid>
		</StyledSection>
	);
});

export default About;
