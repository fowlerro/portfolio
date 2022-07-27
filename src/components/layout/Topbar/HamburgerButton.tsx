import { IconButton } from '@mui/material';

import Hamburger from '@components/icons/Hamburger';

interface HamburgerProps {
	expanded: boolean;
	onClick: () => void;
}

export default function HamburgerButton({
	expanded,
	onClick,
}: HamburgerProps): JSX.Element {
	return (
		<IconButton sx={{ p: 0 }} onClick={onClick} aria-label="open navigation">
			<Hamburger expanded={expanded} />
		</IconButton>
	);
}
