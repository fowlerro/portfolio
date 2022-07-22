import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Home from './Home';
import Project from './Project';

export default function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path=":project" element={<Project />} />
				</Route>
			</ReactRoutes>
		</BrowserRouter>
	);
}
