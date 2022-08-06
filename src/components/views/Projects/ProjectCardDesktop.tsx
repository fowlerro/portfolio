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

import { motion } from 'framer-motion';
import Icon from '../Technology/Icon';
import { ProjectCardProps } from './ProjectCard';

const StyledCard = styled(Card)(({ theme }) => ({
	boxShadow: theme.shadows[4],
	maxWidth: '50rem',
	position: 'relative',
	background: 'transparent',
}));

const MotionCard = motion(StyledCard);
const MotionContent = motion(Box);

const imageVariants = {
	hovered: {
		filter: 'blur(8px)',
	},
};

const contentVariants = {
	initial: {
		transform: 'translateX(100%)',
	},

	hovered: {
		transform: 'translateX(0%)',
	},
};

export default function ProjectCardDesktop({
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
		<MotionCard
			elevation={0}
			initial="initial"
			animate="initial"
			whileHover="hovered"
			whileFocus="hovered"
		>
			<motion.div variants={imageVariants}>
				<CardMedia image={thumbnail} component="img" alt="Project's screenshot" />
			</motion.div>
			<MotionContent
				variants={contentVariants}
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					height: '100%',
					width: '18rem',
					backgroundColor: (theme) => theme.palette.background.paper,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					borderRadius: 1,
				}}
			>
				<CardContent sx={{ p: 2, paddingTop: 3 }}>
					<Box>
						<Typography variant="h3" gutterBottom sx={{ my: 2 }}>
							{name}
						</Typography>
						<Typography
							variant="body3"
							color="secondary"
							paragraph
							sx={{ textAlign: 'left', whiteSpace: 'pre-line' }}
						>
							{shortDescription}
						</Typography>
						<Link
							href={`/${name}`}
							target="_blank"
							rel="noopener"
							color="textPrimary"
							variant="body2"
						>
							See more
						</Link>
					</Box>
				</CardContent>
				<CardActions sx={{ p: 2, flexWrap: 'wrap' }}>
					<List
						sx={{ flex: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}
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
			</MotionContent>
		</MotionCard>
	);
}
