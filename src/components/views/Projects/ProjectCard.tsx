import useIsDesktop from '@hooks/useIsDesktop';

import ProjectCardMobile from './ProjectCardMobile';
import type { IconMap } from '../Technology/Icon';
import ProjectCardDesktop from './ProjectCardDesktop';

interface StackItem {
	label: string;
	icon: IconMap;
}

export interface ProjectCardProps {
	thumbnail: string;
	name: string;
	shortDescription: string;
	stack: StackItem[];
	githubURL: string;
}

export default function ProjectCard(props: ProjectCardProps): JSX.Element {
	const isDesktop = useIsDesktop();

	return isDesktop ? <ProjectCardDesktop {...props} /> : <ProjectCardMobile {...props} />;
}
