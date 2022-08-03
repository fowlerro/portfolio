import { motion } from 'framer-motion';

import useIsDesktop from '@hooks/useIsDesktop';
import { styled, Typography } from '@mui/material';

interface IconProps {
	icon: string;
	label: string;
}

const StyledListItem = styled('li')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	width: '82px',

	rowGap: theme.spacing(1),
	color: theme.palette.secondary.main,
	padding: theme.spacing(1),

	':focus, :hover': {
		outline: 0,
		color: theme.palette.text.primary,
	},

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(2),
	},
}));

const MotionListItem = motion(StyledListItem);

const iconAnimationVariants = {
	initial: {
		scale: 1,
		rotate: 0,
		outline: 'none',
	},

	hovered: {
		scale: 1.25,
		rotate: -10,
		outline: 'none',
	},
};
export default function Icon({ icon, label }: IconProps): JSX.Element {
	const isDesktop = useIsDesktop();

	const iconSize = isDesktop ? '40px' : '32px';

	return (
		<MotionListItem
			initial="initial"
			animate="initial"
			whileHover="hovered"
			whileFocus="hovered"
			aria-labelledby={`label-${label}`}
			tabIndex={0}
		>
			<motion.img
				src={icon}
				width={iconSize}
				alt={label}
				variants={iconAnimationVariants}
				transition={{
					type: 'spring',
					damping: 10,
					stiffness: 300,
					mass: 1,
				}}
			/>
			<Typography variant="body3" component="span" id={`label-${label}`}>
				{label}
			</Typography>
		</MotionListItem>
	);
}
