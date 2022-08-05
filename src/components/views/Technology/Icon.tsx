import { CSSProperties } from 'react';

import { motion } from 'framer-motion';
import { styled, Tooltip, Typography } from '@mui/material';

const icons = [
	'html',
	'css',
	'javascript',
	'typescript',
	'node',
	'git',
	'react',
	'express',
	'materialui',
	'mongodb',
	'socketio',
	'discordjs',
] as const;

export type IconMap = typeof icons[number];

interface IconProps {
	icon: IconMap;
	label: string;
	size?: CSSProperties['width'];
	hideLabel?: boolean;
}

const Container = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	rowGap: theme.spacing(1),
	color: theme.palette.secondary.main,

	':focus, :hover': {
		outline: 0,
		color: theme.palette.text.primary,
	},
}));

const MotionContainer = motion(Container);
const MotionTooltip = motion(Tooltip);

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
export default function Icon({
	icon,
	label,
	size = '40px',
	hideLabel = false,
}: IconProps): JSX.Element {
	const iconSrc = `src/assets/icons/${icon}.svg`;

	const containerProps = {
		initial: 'initial',
		animate: 'initial',
		whileHover: 'hovered',
		whileFocus: 'hovered',
		tabIndex: 0,
	};

	const image = (
		<motion.img
			src={iconSrc}
			width={size}
			alt={label}
			variants={iconAnimationVariants}
			transition={{
				type: 'spring',
				damping: 10,
				stiffness: 300,
				mass: 1,
			}}
		/>
	);

	if (hideLabel)
		return (
			<MotionTooltip title={label} arrow enterTouchDelay={0} {...containerProps}>
				{image}
			</MotionTooltip>
		);

	return (
		<MotionContainer aria-labelledby={`label-${label}`} {...containerProps}>
			{image}
			<Typography variant="body3" component="span" id={`label-${label}`}>
				{label}
			</Typography>
		</MotionContainer>
	);
}
