import { styled } from '@mui/material';

import useIsDesktop from '@hooks/useIsDesktop';

import mobileIllustration from '@assets/illustrations/hero_mobile.svg';
import desktopIllustration from '@assets/illustrations/hero_desktop.svg';

const StyledImg = styled('img')({
	width: '100%',
	maxWidth: '25rem',
});

export default function Illustration(): JSX.Element {
	const isDesktop = useIsDesktop();

	return (
		<StyledImg
			src={isDesktop ? desktopIllustration : mobileIllustration}
			alt="Illustration"
			aria-hidden
		/>
	);
}
