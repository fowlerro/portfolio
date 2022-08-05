import useIsDesktop from '@hooks/useIsDesktop';
import { Box, styled, Typography } from '@mui/material';

import Icon from './Icon';

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginBlock: '8rem',
	marginInline: theme.spacing(4),

	[theme.breakpoints.up('md')]: {
		marginInline: theme.spacing(8),
	},
}));

const ListItem = styled('li')(({ theme }) => ({
	width: '82px',
	padding: theme.spacing(1),

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(2),
	},
}));

export default function Technology(): JSX.Element {
	const isDesktop = useIsDesktop();

	const iconSize = isDesktop ? '40px' : `32px`;
	return (
		<StyledSection>
			<Typography variant="h2" sx={{ marginBottom: '2rem' }}>
				<Typography variant="h2" component="span" color="primary">
					Technology{' '}
				</Typography>
				I use!
			</Typography>
			<Box
				component="ul"
				display="flex"
				flexWrap="wrap"
				justifyContent="center"
				maxWidth="35rem"
				marginX="auto"
				sx={{
					listStyle: 'none',
					padding: 0,
				}}
			>
				<ListItem>
					<Icon icon="html" label="HTML" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="css" label="CSS" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="javascript" label="JavaScript" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="typescript" label="TypeScript" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="node" label="NodeJS" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="git" label="Git" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="react" label="React" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="express" label="Express" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="materialui" label="Material UI" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="mongodb" label="MongoDB" size={iconSize} />
				</ListItem>
				<ListItem>
					<Icon icon="socketio" label="Socket.io" size={iconSize} />
				</ListItem>
			</Box>
		</StyledSection>
	);
}
