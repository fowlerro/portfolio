import { Link, Tooltip, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

import Github from '@components/icons/brands/Github';
import Discord from '@components/icons/brands/Discord';
import LinkedIn from '@components/icons/brands/LinkedIn';
import { ReactNode } from 'react';

const MotionLink = motion(Link);

interface ItemProps {
	label: string;
	tooltip: string;
	href: string;
	children: ReactNode;
}

function Item({ label, tooltip, href, children }: ItemProps) {
	const theme = useTheme();

	const variants = {
		initial: {
			color: theme.palette.secondary.main,
			scale: 1,
		},
		hovered: {
			color: theme.palette.primary.main,
			scale: 1.25,
		},
	};

	return (
		<Tooltip title={tooltip} describeChild>
			<MotionLink
				aria-label={label}
				href={href}
				target="_blank"
				rel="noopener"
				display="flex"
				alignItems="center"
				color="secondary"
				variants={variants}
				initial="initial"
				whileHover="hovered"
			>
				{children}
			</MotionLink>
		</Tooltip>
	);
}

export default function Socials(): JSX.Element {
	return (
		<>
			<Item label="Github" tooltip="@fowlerro" href="https://github.com/fowlerro/">
				<Github />
			</Item>
			<Item
				label="LinkedIn"
				tooltip="@kamilwenta"
				href="https://linkedin.com/in/kamilwenta/"
			>
				<LinkedIn />
			</Item>

			<Item
				label="Discord"
				tooltip="@fowlerro#2107"
				href="https://discordapp.com/users/313346190995619841/"
			>
				<Discord />
			</Item>
		</>
	);
}
