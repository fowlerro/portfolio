import { styled, Typography } from '@mui/material';

import type { Project } from '@utils/projects';

import BrowserScreenshot from './BrowserScreenshot';

interface ScreensProps {
	screenshots: Project['screenshots'];
}

const StyledSection = styled('section')({
	textAlign: 'center',
	marginTop: '10rem',
});

const ScreensWrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '2rem',
});

export default function Screens({ screenshots }: ScreensProps): JSX.Element {
	return (
		<StyledSection>
			<Typography variant="h2" gutterBottom sx={{ marginBottom: '2rem' }}>
				Screens
			</Typography>
			<ScreensWrapper>
				{screenshots.map(({ label, url, image }) => (
					<BrowserScreenshot key={label} label={label} url={url} image={image} />
				))}
			</ScreensWrapper>
		</StyledSection>
	);
}
