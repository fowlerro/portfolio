import { Box, darken, Paper, styled, Typography } from '@mui/material';

interface BrowserScreenshotProps {
	label: string;
	image: string;
	url: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
	background: theme.palette.background.paper,
	display: 'flex',
	flexDirection: 'column',
	overflow: 'hidden',
	maxWidth: 'min(1200px, 100%)',
	boxShadow: theme.shadows[6],
}));

const SearchBar = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	margin: theme.spacing(1),
	paddingInline: theme.spacing(1),
	borderRadius: '4px',
	width: 'min(30rem, 75%)',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	textOverflow: 'ellipsis',
}));

const Circles = styled('div')(({ theme }) => ({
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
	paddingLeft: theme.spacing(2),
}));

const Circle = styled('div', {
	shouldForwardProp: (prop) => prop !== 'red',
})<{ red?: boolean }>(({ theme, red }) => ({
	width: '12px',
	height: '12px',
	borderRadius: '50%',
	backgroundColor: red ? theme.palette.error.light : theme.palette.secondary.main,
	cursor: 'pointer',

	':hover': {
		backgroundColor: darken(
			red ? theme.palette.error.light : theme.palette.secondary.main,
			0.3
		),
	},
}));

export default function BrowserScreenshot({
	label,
	image,
	url,
}: BrowserScreenshotProps): JSX.Element {
	return (
		<StyledPaper>
			<Box display="flex">
				<Circles>
					<Circle red />
					<Circle />
					<Circle />
				</Circles>
				<SearchBar>
					<Typography
						variant="body3"
						color="textSecondary"
						sx={{
							maxWidth: '100%',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
							textOverflow: 'ellipsis',
						}}
					>
						{url}
					</Typography>
				</SearchBar>
				<Box flex={1} />
			</Box>
			<img src={image} alt={label} width="100%" />
		</StyledPaper>
	);
}
