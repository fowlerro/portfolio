import { useRef } from 'react';

import Topbar from '@components/layout/Topbar';
import useVisibleSection from '@hooks/useVisibleSection';

export default function Home(): JSX.Element {
	const sectionsRef = useRef<HTMLDivElement[]>([]);

	const visibleSection = useVisibleSection({
		sectionsRef,
	});

	return (
		<>
			<Topbar visibleSection={visibleSection} />
			<div ref={(el) => sectionsRef.current.push(el!)} style={{ height: '120vh' }}>
				HERO
			</div>
			<div
				id="about"
				style={{ height: '120vh', outline: '1px solid red' }}
				ref={(el) => sectionsRef.current.push(el!)}
			>
				ABOUT
			</div>
			<div style={{ height: '120vh' }}>TECH</div>
			<div
				id="projects"
				style={{ height: '120vh', outline: '1px solid blue' }}
				ref={(el) => sectionsRef.current.push(el!)}
			>
				PROJECTS
			</div>
			<div
				id="contact"
				style={{ height: '120vh', outline: '1px solid green' }}
				ref={(el) => sectionsRef.current.push(el!)}
			>
				CONTACT
			</div>
		</>
	);
}
