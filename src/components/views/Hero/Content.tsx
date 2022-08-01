import { Box, Typography } from '@mui/material';

export default function Content(): JSX.Element {
	return (
		<Box mb={4}>
			<Typography variant="h1" gutterBottom>
				Hello, I am{' '}
				<Typography variant="h1" component="span" color="primary">
					Kamil!
				</Typography>
			</Typography>
			<Typography variant="body1" color="secondary" gutterBottom>
				A React Developer focused on building responsive apps with clean codebase.
			</Typography>
			<Typography variant="body1" color="secondary">
				I am looking forward to work with you!
			</Typography>
		</Box>
	);
}
