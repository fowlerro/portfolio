import { styled } from '@mui/material';

import useIsDesktop from '@hooks/useIsDesktop';

import mobileIllustration from '@assets/illustrations/about_mobile.svg';
import desktopIllustration from '@assets/illustrations/about_desktop.svg';

const StyledBox = styled('div')(({ theme }) => ({
	width: '100%',
	maxWidth: '25rem',
	marginBottom: '4rem',
	position: 'relative',

	'::before': {
		content: "''",
		position: 'absolute',
		width: '50%',
		borderRadius: '50%',
		aspectRatio: '1/1',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: -1,
		background: 'rgba(255, 255, 255, 0.05)',
		filter: 'blur(25px)',
	},

	[theme.breakpoints.up('md')]: {
		'::before': {
			width: '100%',
			filter: 'blur(50px)',
		},
	},
}));

export default function Illustration(): JSX.Element {
	const isDesktop = useIsDesktop();

	return (
		<StyledBox>
			<img
				src={isDesktop ? desktopIllustration : mobileIllustration}
				width="100%"
				alt="Illustration"
				aria-hidden
			/>
		</StyledBox>
	);
}
