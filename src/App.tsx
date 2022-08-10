import { useEffect } from 'react';

import Routes from '@pages/Routes';

function App() {
	useEffect(() => {
		setTimeout(() => {
			const { hash } = window.location;
			const anchorElement = document.querySelector(hash);
			if (anchorElement) anchorElement.scrollIntoView({ behavior: 'smooth' });
		}, 0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Routes />;
}

export default App;
