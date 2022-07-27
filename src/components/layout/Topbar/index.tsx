import { useRef } from 'react';

import { AppBar, useScrollTrigger, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import useBoolean from '@hooks/useBoolean';
import useIsDesktop from '@hooks/useIsDesktop';

import Drawer from './Drawer';
import Socials from './Socials';
import Items from './Items';
import HamburgerButton from './HamburgerButton';

const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop: string) => prop !== 'scroll' && prop !== 'expanded',
})<{ scroll: boolean; expanded: boolean }>(({ theme, scroll, expanded }) => ({
	backgroundImage: 'none',
	backgroundColor:
		scroll || expanded
			? theme.palette.background.paper
			: theme.palette.background.default,

	boxShadow: scroll && !expanded ? theme.shadows[5] : theme.shadows[0],
	transition: theme.transitions.create(['background-color', 'boxShadow'], {
		duration: '500ms',
	}),
}));

const RightItems = styled(Grid)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'flex-end',
	columnGap: theme.spacing(2),
	[theme.breakpoints.up('sm')]: {
		columnGap: theme.spacing(4),
	},
}));

interface TopbarProps {
	visibleSection: string | null;
}

export default function Topbar({ visibleSection }: TopbarProps): JSX.Element {
	const [expanded, { toggle, setFalse }] = useBoolean();

	const isDesktop = useIsDesktop();

	const appBarRef = useRef<HTMLDivElement>(null);
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return (
		<>
			<StyledAppBar ref={appBarRef} position="fixed" scroll={trigger} expanded={expanded}>
				<Grid
					container
					columns={{ xs: 4, md: 12 }}
					columnSpacing={2}
					alignItems="center"
					sx={{ paddingBlock: [2, null, 4], paddingInline: [4, null, 8] }}
				>
					<Grid xs={1} md={3} mdOffset={1} pl={0} minWidth={[0, 0, '25rem']}>
						{isDesktop ? (
							<Items visibleSection={visibleSection} />
						) : (
							<HamburgerButton expanded={expanded} onClick={toggle} />
						)}
					</Grid>
					<RightItems xs={2} xsOffset="auto">
						<Socials />
					</RightItems>
				</Grid>
			</StyledAppBar>
			{!isDesktop && (
				<Drawer
					open={expanded}
					onClose={setFalse}
					appBarRef={appBarRef}
					visibleSection={visibleSection}
				/>
			)}
		</>
	);
}
