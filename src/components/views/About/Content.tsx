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
				Programming has been my interest for about 5 years and I tried a lot of different
				things since then. When I came across Javascript and web development 2 years ago,
				I knew this is what I want to do in my life.
			</Typography>
			<Typography variant="body2" color="secondary" gutterBottom>
				In those 2 years I learned Javascript, Typescript, NodeJS, React, Express and I
				tried a lot of other things like NestJS, GraphQL, can’t really say I know them
				well, but regardless of that, everything I tried in those 2 years was real fun for
				me and it still is!
			</Typography>
			<Typography variant="body2" color="secondary">
				Now I want to build responsive and snappy apps, keeping codebase clean and
				orginized.
			</Typography>
		</Box>
	);
}
