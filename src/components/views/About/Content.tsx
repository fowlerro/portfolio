import { Box, Typography } from '@mui/material';

export default function Content(): JSX.Element {
	return (
		<Box mb={4}>
			<Typography variant="h2" sx={{ marginBottom: '1rem' }}>
				About{' '}
				<Typography variant="h2" component="span" color="primary">
					me!
				</Typography>
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				My name is Kamil and I am a self-taught Web Developer specializing in React.
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				Programming has been my interest since 2017, I tried a lot of different things
				through my journey and when I came across Javascript and web development about 3
				years later, I knew this is what I want to do in my life.
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				I am mainly focused on frontend development, specializing in React and React
				Native, but I can also do well on backend. I know NodeJS, Express, NestJS,
				GraphQL, I can work with databases, I am keen to try and learn new technologies
				and areas :D
			</Typography>
			<Typography variant="body2" color="secondary">
				Now I want to build responsive and snappy apps, keeping codebase clean and
				orginized.
			</Typography>
		</Box>
	);
}
