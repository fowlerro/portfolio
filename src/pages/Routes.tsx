import Footer from '@components/layout/Footer';
import projects from '@utils/projects';
import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';

import Home from './Home';
import Project from './Project';

export default function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<ReactRoutes>
				<Route path="/">
					<Route index element={<Home />} />
					{projects.map((project) => (
						<Route
							key={project.name}
							path={project.name}
							element={<Project project={project} />}
						/>
					))}
				</Route>
				<Route path="*" element={<Navigate replace to="/" />} />
			</ReactRoutes>
			<Footer />
		</BrowserRouter>
	);
}
