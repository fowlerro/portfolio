import { motion } from 'framer-motion';

interface HamburgerProps {
	expanded: boolean;
}

const topLine = {
	initial: {
		width: 30,
		rotate: 0,
		translateY: 0,
	},
	hoverClosed: {
		width: 40,
	},
	closed: {
		rotate: 0,
		width: 30,
		translateX: 0,
		translateY: 0,
	},
	opened: {
		rotate: 45,
		width: 40,
		translateX: 8,
		translateY: -7,
	},
};

const bottomLine = {
	initial: {
		width: 40,
		rotate: 0,
		translateY: 0,
	},
	hoverClosed: {
		width: 30,
	},
	closed: {
		rotate: 0,
		translateX: 0,
		translateY: 0,
	},
	opened: {
		rotate: -45,
		width: 40,
		translateX: 4,
		translateY: 9,
	},
};

export default function Hamburger({ expanded }: HamburgerProps): JSX.Element {
	return (
		<motion.svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			initial="initial"
			whileHover={expanded ? 'hoverOpened' : 'hoverClosed'}
			animate={expanded ? 'opened' : 'closed'}
			variants={{
				hoverOpened: {
					rotate: 90,
				},
			}}
			role="img"
			aria-hidden
		>
			<motion.rect
				x="12"
				y="23"
				height="6"
				rx="2"
				fill="white"
				variants={topLine}
				style={{ originX: 0, originY: 0 }}
			/>
			<motion.rect
				x="12"
				y="35"
				height="6"
				rx="2"
				fill="white"
				variants={bottomLine}
				style={{ originX: 0, originY: 0 }}
			/>
		</motion.svg>
	);
}
