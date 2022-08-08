import { styled, Typography, Link } from '@mui/material';

import envelopeIcon from '@assets/icons/envelope.svg';

const StyledLink = styled(Link)({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '8px',
});

export default function EmailLink(): JSX.Element {
	return (
		<StyledLink
			href="mailto:kami.wenta@gmail.com"
			aria-label="Write me an e-mail"
			color="textPrimary"
			underline="hover"
		>
			<img src={envelopeIcon} alt="Envelope icon" aria-hidden width="32px" />
			<Typography component="span" variant="body2">
				kami.wenta@gmail.com
			</Typography>
		</StyledLink>
	);
}
