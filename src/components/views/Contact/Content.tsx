import { Box, Typography } from '@mui/material';

export default function Content(): JSX.Element {
	return (
		<Box mb={4}>
			<Typography variant="h2" sx={{ marginBottom: '1rem' }}>
				Contact
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				Want to work together or have any questions?
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				Feel free to contact me!
			</Typography>
		</Box>
	);
}
