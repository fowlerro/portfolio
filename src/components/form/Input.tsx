import { ForwardedRef, forwardRef } from 'react';

import { InputBase, InputBaseProps, styled } from '@mui/material';

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
	{ placeholder, ...props }: InputBaseProps,
	ref: ForwardedRef<unknown>
): JSX.Element {
	return (
		<StyledInput
			ref={ref}
			inputProps={{
				'aria-label': placeholder,
			}}
			placeholder={placeholder}
			{...props}
		/>
	);
}

export default forwardRef(Input);
