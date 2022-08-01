import { forwardRef } from 'react';

import { Button, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import phoneIcon from '@assets/icons/phone.svg';

import Content from './Content';
import Illustration from './Illustration';

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginTop: '8rem',

	[theme.breakpoints.up('md')]: {
		textAlign: 'left',
	},
}));

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
	return (
		<StyledSection ref={ref}>
			<Grid
				container
				justifyContent="center"
				direction={['column', null, 'row-reverse']}
				sx={{
					marginInline: [4, null, 8],
					marginTop: ['10rem', null, '15rem'],
				}}
			>
				<Grid xs={12} mdOffset={1} md={5}>
					<Illustration />
				</Grid>
				<Grid
					xs={12}
					mdOffset={1}
					md={5}
					alignSelf="flex-end"
					mt={['2rem', null, 'clamp(5rem, 15vw, 15rem)']}
				>
					<Content />
					<Button
						variant="outlined"
						startIcon={
							<img src={phoneIcon} width="24px" height="24px" alt="Contact me" />
						}
						href="#contact"
					>
						Contact me
					</Button>
				</Grid>
			</Grid>
		</StyledSection>
	);
});

export default Hero;
