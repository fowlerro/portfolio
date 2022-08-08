import { Typography, styled } from '@mui/material';

const StyledFooter = styled('footer')({
	textAlign: 'center',
});

export default function Footer(): JSX.Element {
	return (
		<StyledFooter>
			<Typography variant="body3" color="secondary">
				Copyright © 2022 All Rights Reserved
			</Typography>
		</StyledFooter>
	);
}
