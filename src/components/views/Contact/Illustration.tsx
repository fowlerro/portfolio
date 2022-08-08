import { styled } from '@mui/material';

import desktopIllustration from '@assets/illustrations/contact_desktop.svg';

const StyledImg = styled('img')({
	width: '100%',
	maxWidth: '20rem',
	marginBottom: '4rem',
});

export default function Illustration(): JSX.Element {
	return <StyledImg src={desktopIllustration} alt="Illustration" aria-hidden />;
}
