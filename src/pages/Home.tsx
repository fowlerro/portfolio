import { useRef } from 'react';

import Topbar from '@components/layout/Topbar';
import Hero from '@components/views/Hero';

import useVisibleSection from '@hooks/useVisibleSection';

export default function Home(): JSX.Element {
	const sectionsRef = useRef<HTMLDivElement[]>([]);

	const visibleSection = useVisibleSection({
		sectionsRef,
	});

	return (
		<>
			<Topbar visibleSection={visibleSection} />
			<Hero ref={(el) => sectionsRef.current.push(el!)} />
			<div id="about" ref={(el) => sectionsRef.current.push(el!)} />
			<div />
			<div id="projects" ref={(el) => sectionsRef.current.push(el!)} />
			<div id="contact" ref={(el) => sectionsRef.current.push(el!)} />
		</>
	);
}
