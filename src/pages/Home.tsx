import { useRef } from 'react';

import Topbar from '@components/layout/Topbar';
import useVisibleSection from '@hooks/useVisibleSection';

export default function Home(): JSX.Element {
	const heroRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	const visibleSection = useVisibleSection({
		sectionRefs: [heroRef, aboutRef, projectsRef, contactRef],
	});

	return (
		<>
			<Topbar visibleSection={visibleSection} />
			<div ref={heroRef} style={{ height: '120vh' }}>
				HERO
			</div>
			<div
				id="about"
				style={{ height: '120vh', outline: '1px solid red' }}
				ref={aboutRef}
			>
				ABOUT
			</div>
			<div style={{ height: '120vh' }}>TECH</div>
			<div
				id="projects"
				style={{ height: '120vh', outline: '1px solid blue' }}
				ref={projectsRef}
			>
				PROJECTS
			</div>
			<div
				id="contact"
				style={{ height: '120vh', outline: '1px solid green' }}
				ref={contactRef}
			>
				CONTACT
			</div>
		</>
	);
}
