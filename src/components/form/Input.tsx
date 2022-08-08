import { ForwardedRef, forwardRef } from 'react';

import {
	InputBase,
	InputBaseProps,
	FormControl,
	FormHelperText,
	styled,
} from '@mui/material';

interface InputProps extends InputBaseProps {
	errorMessage?: string;
}

const StyledInput = styled(InputBase)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	borderRadius: '4px',
	fontSize: '1rem',
	color: theme.palette.text.primary,
	border: '1px solid transparent',
	overflow: 'visible',

	'.MuiInputBase-input': {
		padding: '8px 24px',
	},

	'& ::placeholder': {
		color: 'rgba(255, 255, 255, .25)',
		opacity: 1,
	},
	':focus-within': {
		background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box, conic-gradient(from 180deg at 50% 50%, #7973A9, #59308C, #7973A9, rgba(121,115,169,1), #59308C, rgba(121,115,169,1), rgba(121,115,169,1))`,
	},
}));

function Input(
	{ placeholder, errorMessage, ...props }: InputProps,
	ref: ForwardedRef<unknown>
): JSX.Element {
	return (
		<FormControl error={Boolean(errorMessage)}>
			<StyledInput
				ref={ref}
				inputProps={{
					'aria-label': placeholder,
				}}
				placeholder={placeholder}
				{...props}
			/>
			{errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
		</FormControl>
	);
}

export default forwardRef(Input);
