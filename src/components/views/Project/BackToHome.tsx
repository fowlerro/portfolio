import { styled } from '@mui/material';

import leftArrow from '@assets/icons/left_arrow.svg';
import { Link } from 'react-router-dom';

const StyledBox = styled(Link)(({ theme }) => ({
	display: 'flex',
	columnGap: theme.spacing(4),
	cursor: 'pointer',
	textDecoration: 'none',

	':hover': {
		textDecoration: 'underline',
	},
}));

const BackHomeText = styled('span')(({ theme }) => ({
	fontSize: '1rem',
	lineHeight: '20px',
	letterSpacing: '6px',
	textTransform: 'uppercase',
	color: theme.palette.secondary.main,
}));

export default function BackToHome(): JSX.Element {
	return (
		<StyledBox to="/">
			<img src={leftArrow} alt="Left arrow" />
			<BackHomeText>Back to home</BackHomeText>
		</StyledBox>
	);
}
