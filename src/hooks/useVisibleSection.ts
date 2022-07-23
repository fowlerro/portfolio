import { RefObject, useEffect, useState } from 'react';

interface UseVisibleSectionProps {
	sectionRefs: RefObject<HTMLDivElement>[];
}

function useVisibleSection({ sectionRefs }: UseVisibleSectionProps): string | null {
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

		sectionRefs.forEach((ref) => {
			if (ref.current) observer.observe(ref.current);
		});

		return () => observer.disconnect();
	}, [...sectionRefs, visibleSection, setVisibleSection]);

	return visibleSection;
}

export default useVisibleSection;
