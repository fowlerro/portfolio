import { Helmet } from 'react-helmet-async';

import ProjectView from '@components/views/Project';
import type { Project as ProjectType } from '@utils/projects';

interface ProjectProps {
	project: ProjectType;
}

export default function Project({ project }: ProjectProps): JSX.Element {
	return (
		<>
			<Helmet>
				<title>{project.name} - Kamil Wenta | React Developer</title>
				<meta name="title" content={`${project.name} - Kamil Wenta | React Developer`} />
				<meta name="description" content={project.shortDescription} />
			</Helmet>
			<ProjectView project={project} />
		</>
	);
}
