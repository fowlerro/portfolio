import { styled, Typography } from '@mui/material';

interface ContentProps {
	name: string;
	longDescription: string;
}

const Wrapper = styled('div')({
	marginTop: '2rem',
	maxWidth: '60rem',
});

export default function Content({ name, longDescription }: ContentProps): JSX.Element {
	return (
		<Wrapper>
			<Typography variant="h1" gutterBottom>
				{name}
			</Typography>
			<Typography variant="body2" color="textSecondary" sx={{ whiteSpace: 'pre-line' }}>
				{longDescription}
			</Typography>
		</Wrapper>
	);
}
