import { useRef } from 'react';
import { Helmet } from 'react-helmet';

import Topbar from '@components/layout/Topbar';

import Hero from '@components/views/Hero';
import About from '@components/views/About';
import Technology from '@components/views/Technology';
import Projects from '@components/views/Projects';

import useVisibleSection from '@hooks/useVisibleSection';
import Contact from '@components/views/Contact';

export default function Home(): JSX.Element {
	const sectionsRef = useRef<HTMLDivElement[]>([]);

	const visibleSection = useVisibleSection({
		sectionsRef,
	});

	return (
		<>
			<Helmet>
				<title>Home - Kamil Wenta | React Developer</title>
				<meta name="title" content="Home - Kamil Wenta | React Developer" />
				<meta
					name="description"
					content="A React Developer focused on building responsive apps with clean codebase."
				/>
			</Helmet>
			<Topbar visibleSection={visibleSection} />
			<Hero ref={(el) => sectionsRef.current.push(el!)} />
			<About ref={(el) => sectionsRef.current.push(el!)} />
			<Technology />
			<Projects ref={(el) => sectionsRef.current.push(el!)} />
			<Contact ref={(el) => sectionsRef.current.push(el!)} />
		</>
	);
}
