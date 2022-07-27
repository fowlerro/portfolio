import { Box, Link, styled, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import useIsDesktop from '@hooks/useIsDesktop';

const MotionLink = motion(Link);

interface ItemProps {
	href: string;
	active: boolean;
	children: string;
	onClose?: () => void;
}

function Item({ href, active, children, onClose }: ItemProps) {
	const theme = useTheme();
	const isDesktop = useIsDesktop();

	const variants = {
		initial: {
			rotate: 0,
			scale: 1,
		},
		hovered: {
			rotate: -8,
			scale: 1.1,
		},
		active: {
			rotate: -8,
			scale: 1.1,
		},
	};
	return (
		<MotionLink
			href={href}
			variant="h3"
			sx={{
				p: 1,
				textDecoration: 'none',
				color: active ? theme.palette.primary.main : 'text.primary',
				rotate: 0,
				scale: 1,
			}}
			variants={variants}
			transition={{
				type: 'spring',
				damping: 10,
				stiffness: 300,
				mass: 1,
			}}
			initial="initial"
			whileHover="hovered"
			whileFocus={isDesktop ? 'hovered' : undefined}
			animate={active ? 'active' : 'initial'}
			onClick={onClose}
		>
			{children}
		</MotionLink>
	);
}

interface ItemsProps {
	visibleSection: string | null;
	onClose?: () => void;
}

const StyledItemsBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	placeItems: 'center',
	rowGap: theme.spacing(8),
	paddingBlock: theme.spacing(8),

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
		rowGap: 0,
		paddingBlock: 0,
	},
}));

export default function Items({ visibleSection, onClose }: ItemsProps): JSX.Element {
	return (
		<StyledItemsBox role="navigation">
			<Item href="#about" active={visibleSection === 'about'} onClose={onClose}>
				ABOUT
			</Item>
			<Item href="#projects" active={visibleSection === 'projects'} onClose={onClose}>
				PROJECTS
			</Item>
			<Item href="#contact" active={visibleSection === 'contact'} onClose={onClose}>
				CONTACT
			</Item>
		</StyledItemsBox>
	);
}
