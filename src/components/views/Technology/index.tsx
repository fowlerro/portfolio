import { Box, styled, Typography } from '@mui/material';

import htmlIcon from '@assets/icons/html.svg';
import cssIcon from '@assets/icons/css.svg';
import javascriptIcon from '@assets/icons/javascript.svg';
import typescriptIcon from '@assets/icons/typescript.svg';
import nodeIcon from '@assets/icons/node.svg';
import gitIcon from '@assets/icons/git.svg';
import reactIcon from '@assets/icons/react.svg';
import expressIcon from '@assets/icons/express.svg';
import materialuiIcon from '@assets/icons/materialui.svg';
import mongoIcon from '@assets/icons/mongodb.svg';
import socketIcon from '@assets/icons/socketio.svg';

import Icon from './Icon';

const StyledSection = styled('section')(({ theme }) => ({
	textAlign: 'center',
	marginBlock: '8rem',
	marginInline: theme.spacing(4),

	[theme.breakpoints.up('md')]: {
		marginInline: theme.spacing(8),
	},
}));

export default function Technology(): JSX.Element {
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
				<Icon icon={htmlIcon} label="HTML" />
				<Icon icon={cssIcon} label="CSS" />
				<Icon icon={javascriptIcon} label="JavaScript" />
				<Icon icon={typescriptIcon} label="TypeScript" />
				<Icon icon={nodeIcon} label="NodeJS" />
				<Icon icon={gitIcon} label="Git" />
				<Icon icon={reactIcon} label="React" />
				<Icon icon={expressIcon} label="Express" />
				<Icon icon={materialuiIcon} label="Material UI" />
				<Icon icon={mongoIcon} label="MongoDB" />
				<Icon icon={socketIcon} label="Socket.io" />
			</Box>
		</StyledSection>
	);
}
