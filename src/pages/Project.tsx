import ProjectView from '@components/views/Project';
import type { Project as ProjectType } from '@utils/projects';

interface ProjectProps {
	project: ProjectType;
}

export default function Project({ project }: ProjectProps): JSX.Element {
	return <ProjectView project={project} />;
}
