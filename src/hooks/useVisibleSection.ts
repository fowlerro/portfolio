import { RefObject, useEffect, useState } from 'react';

interface UseVisibleSectionProps {
	sectionsRef: RefObject<HTMLDivElement[]>;
}

function useVisibleSection({ sectionsRef }: UseVisibleSectionProps): string | null {
	const [visibleSection, setVisibleSection] = useState<string | null>(null);
	const [pageHeight, setPageHeight] = useState(0);

	const observerMargin = Math.floor(pageHeight / 2) || 1;

	useEffect(() => {
		setPageHeight(window.innerHeight);
		window.addEventListener('resize', () => {
			setTimeout(() => {
				setPageHeight(window.innerHeight);
			}, 300);
		});
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.target.id !== visibleSection && entry.isIntersecting)
						setVisibleSection(entry.target.id);
				});
			},
			{
				rootMargin: `-${
					pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
				}px 0px -${observerMargin}px 0px`,
			}
		);

		sectionsRef.current?.forEach((section) => {
			if (section) observer.observe(section);
		});

		return () => observer.disconnect();
	}, [observerMargin, pageHeight, sectionsRef, visibleSection]);

	return visibleSection;
}

export default useVisibleSection;
