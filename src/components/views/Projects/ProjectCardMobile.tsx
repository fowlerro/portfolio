import {
	Box,
	Typography,
	Link,
	styled,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	List,
} from '@mui/material';

import Github from '@components/icons/brands/Github';

import Icon from '../Technology/Icon';
import { ProjectCardProps } from './ProjectCard';

const StyledCard = styled(Card)(({ theme }) => ({
	boxShadow: theme.shadows[4],
	maxWidth: '25rem',
}));

export default function ProjectCardMobile({
	thumbnail,
	name,
	shortDescription,
	stack,
	githubURL,
}: ProjectCardProps): JSX.Element {
	const mappedStack = stack.map(({ label, icon }) => (
		<li key={label} aria-label={label}>
			<Icon label={label} icon={icon} size="24px" hideLabel />
		</li>
	));

	return (
		<StyledCard elevation={0}>
			<CardMedia
				component="img"
				image={thumbnail}
				alt="Project's screenshot"
				sx={{ objectFit: 'contain' }}
			/>
			<CardContent sx={{ p: 2, paddingTop: 3 }}>
				<Box>
					<Typography variant="h3" gutterBottom>
						{name}
					</Typography>
					<Typography
						variant="body3"
						color="secondary"
						paragraph
						sx={{ whiteSpace: 'pre-line' }}
					>
						{shortDescription}
					</Typography>
					<Link
						href={`/${name}`}
						target="_blank"
						rel="noopener"
						color="textPrimary"
						variant="body2"
						sx={{ display: 'block' }}
					>
						See more
					</Link>
				</Box>
			</CardContent>
			<CardActions sx={{ p: 2, flexWrap: 'wrap' }}>
				<List
					sx={{
						flex: 1,
						display: 'flex',
						gap: 1,
						flexWrap: 'wrap',
					}}
					aria-label="Used technology"
				>
					{mappedStack}
				</List>
				<Box alignSelf="flex-end">
					<Link
						href={githubURL}
						target="_blank"
						rel="noopener"
						color="secondary"
						aria-label="Github repository link"
					>
						<Github width={28} />
					</Link>
				</Box>
			</CardActions>
		</StyledCard>
	);
}
