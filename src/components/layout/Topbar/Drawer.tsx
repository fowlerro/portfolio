import { RefObject } from 'react';

import { Drawer as MuiDrawer, styled, Toolbar } from '@mui/material';

import Items from './Items';

interface DrawerProps {
	open: boolean;
	onClose: () => void;
	appBarRef: RefObject<HTMLDivElement>;
	visibleSection: string | null;
}

const StyledDrawer = styled(MuiDrawer)(({ theme, open }) => ({
	'.MuiBox-root': {
		backgroundColor: open
			? theme.palette.background.paper
			: theme.palette.background.default,
		transition: theme.transitions.create('background-color', {
			duration: '500ms',
		}),
	},
}));

export default function Drawer({
	open,
	onClose,
	appBarRef,
	visibleSection,
}: DrawerProps): JSX.Element {
	return (
		<StyledDrawer
			id="navigationDrawer"
			variant="temporary"
			open={open}
			onClose={onClose}
			ModalProps={{
				keepMounted: true,
			}}
			anchor="top"
			sx={{
				zIndex: (theme) => theme.zIndex.appBar - 1,
			}}
			elevation={0}
		>
			<Toolbar
				sx={{
					height: appBarRef.current ? appBarRef.current.clientHeight : undefined,
				}}
			/>
			<Items visibleSection={visibleSection} onClose={onClose} />
		</StyledDrawer>
	);
}
