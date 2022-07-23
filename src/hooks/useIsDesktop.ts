import { Theme, useMediaQuery } from '@mui/material';

function useIsDesktop() {
	const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

	return isDesktop;
}

export default useIsDesktop;
