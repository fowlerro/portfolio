import { forwardRef } from 'react';

import { Box, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import useIsDesktop from '@hooks/useIsDesktop';

import Illustration from './Illustration';
import Content from './Content';
import Form from './Form';

const StyledSection = styled('section')({
	textAlign: 'center',
	marginBottom: '4rem',
});

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
	const isDesktop = useIsDesktop();
	return (
		<StyledSection ref={ref} id="contact">
			<Grid
				container
				justifyContent="flex-start"
				alignItems="flex-end"
				direction={['column', null, 'row']}
				sx={{
					marginInline: [4, null, 8],
					marginTop: ['10rem', null, '15rem'],
				}}
			>
				<Grid xs={12} mdOffset={1} md={5}>
					<Box sx={{ maxWidth: '30rem', marginInline: 'auto' }}>
						<Content />
						<Form />
					</Box>
				</Grid>
				{isDesktop && (
					<Grid xs={12} mdOffset={2} md={3}>
						<Illustration />
					</Grid>
				)}
			</Grid>
		</StyledSection>
	);
});

export default Contact;
