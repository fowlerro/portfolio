import { styled, Tooltip, useScrollTrigger } from '@mui/material';
import { motion } from 'framer-motion';

import globalTheme from '@styles/theme';
import ChevronUp from '@components/icons/ChevronUp';

const Container = styled('div')(({ theme }) => ({
	position: 'fixed',
	right: '2rem',
	bottom: '2rem',
	width: '4rem',
	height: '4rem',
	borderRadius: '50%',
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[4],
	cursor: 'pointer',
	color: theme.palette.text.primary,
	overflow: 'hidden',
}));

const Wrapper = styled('div')({
	position: 'relative',
	width: '100%',
	height: '100%',
});

const StyledChevron = styled(ChevronUp)({
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
});

const MotionContainer = motion(Container);
const MotionWrapper = motion(Wrapper);
const MotionChevron = motion(StyledChevron);

const variants = {
	hidden: {
		bottom: '-4rem',
	},
	visible: {
		bottom: '2rem',
	},
	hovered: {
		scale: 1.1,
		boxShadow: globalTheme.shadows[12],
	},
};

const arrowVariants = {
	hidden: {},
	visible: {},
	hovered: {
		transform: 'translateY(-100%)',
	},
};

export default function ScrollToTop(): JSX.Element {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 400,
	});

	const handleClick = () => {
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};

	return (
		<Tooltip title="Scroll to top" arrow>
			<MotionContainer
				role="presentation"
				onClick={handleClick}
				variants={variants}
				initial="hidden"
				animate={trigger ? 'visible' : 'hidden'}
				whileHover="hovered"
				whileFocus="hovered"
			>
				<MotionWrapper
					variants={arrowVariants}
					transition={{
						damping: 18,
						stiffness: 400,
						mass: 1,
						type: 'spring',
					}}
				>
					<MotionChevron />
					<MotionChevron
						sx={{
							top: '50%',
							transform: 'translate(-50%, 130%)',
						}}
					/>
				</MotionWrapper>
			</MotionContainer>
		</Tooltip>
	);
}
