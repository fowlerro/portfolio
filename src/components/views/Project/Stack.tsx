import useIsDesktop from '@hooks/useIsDesktop';
import { List, styled } from '@mui/material';

import type { Project } from '@utils/projects';
import Icon from '../Technology/Icon';

interface StackProps {
	stack: Project['stack'];
}

const Wrapper = styled(List)(({ theme }) => ({
	display: 'flex',
	marginInline: 'auto',
	gap: theme.spacing(2),
	flexWrap: 'wrap',
	marginTop: theme.spacing(4),
}));

export default function Stack({ stack }: StackProps): JSX.Element {
	const isDesktop = useIsDesktop();

	return (
		<Wrapper aria-label="Used technology">
			{stack.map(({ label, icon }) => (
				<li key={label} aria-label={label}>
					<Icon label={label} icon={icon} size={isDesktop ? '40px' : '28px'} hideLabel />
				</li>
			))}
		</Wrapper>
	);
}
