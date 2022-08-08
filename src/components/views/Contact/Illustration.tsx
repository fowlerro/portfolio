import { styled } from '@mui/material';

import desktopIllustration from '@assets/illustrations/contact_desktop.svg';

const StyledBox = styled('div')({
	width: '100%',
	maxWidth: '20rem',
	marginBottom: '4rem',
	position: 'relative',

	'::before': {
		content: "''",
		position: 'absolute',
		width: '100%',
		borderRadius: '50%',
		aspectRatio: '1/1',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: -1,
		background: 'rgba(255, 255, 255, 0.1)',
		filter: 'blur(50px)',
	},
});

export default function Illustration(): JSX.Element {
	return (
		<StyledBox>
			<img src={desktopIllustration} alt="Illustration" width="100%" aria-hidden />
		</StyledBox>
	);
}
