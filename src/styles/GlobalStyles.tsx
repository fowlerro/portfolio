import { css } from '@mui/material';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

const styles = css`
	html {
		scroll-behavior: smooth;
		color-scheme: dark;
	}
`;

function GlobalStyles() {
	return <MuiGlobalStyles styles={styles} />;
}

export default GlobalStyles;
