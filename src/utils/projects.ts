import { ProjectCardProps } from '@components/views/Projects/ProjectCard';

import lunarisHome from '@assets/projects/lunaris/home_page.png';
import lunarisCommands from '@assets/projects/lunaris/commands_page.png';
import lunarisProfile from '@assets/projects/lunaris/profile_page.png';
import lunarisServers from '@assets/projects/lunaris/servers_page.png';
import lunarisDashboard from '@assets/projects/lunaris/dashboard_page.png';
import lunarisLevels from '@assets/projects/lunaris/levels_module.png';
import lunarisInteractiveRoles from '@assets/projects/lunaris/interactive_roles_module.png';
import lunarisEmbeds from '@assets/projects/lunaris/embeds_module.png';

export interface Project extends ProjectCardProps {
	longDescription: string;
	screenshots: {
		label: string;
		url: string;
		image: string;
	}[];
}

const projects: Project[] = [
	{
		thumbnail: lunarisHome,
		name: 'Lunaris',
		shortDescription: `Lunaris is a discord bot created to provide most of needed options to manage discord servers.
					I think discord servers have too many different bots so I came up with an idea to make one large bot, which could replace most of them`,
		longDescription: `Lunaris is a discord bot created to provide most of needed options to manage discord servers.
		I think discord servers have too many different bots so I came up with an idea to make one large bot, which could replace most of them.
		At the moment Lunaris has level system, embed messages manager, interactive roles which allows to create interactions to give or remove roles for discord members, powerful, customizable server logs for moderators, set of useful commands, and I will keep expanding its functionality!
		`,
		stack: [
			{ label: 'NodeJS', icon: 'node' },
			{ label: 'TypeScript', icon: 'typescript' },
			{ label: 'React', icon: 'react' },
			{ label: 'Material UI', icon: 'materialui' },
			{ label: 'Express', icon: 'express' },
			{ label: 'discordJS', icon: 'discordjs' },
			{ label: 'MongoDB', icon: 'mongodb' },
		],
		githubURL: 'https://github.com/fowlerro/lunaris.git',
		screenshots: [
			{
				label: 'Home page',
				url: 'lunaris.pro',
				image: lunarisHome,
			},
			{
				label: 'Commands page',
				url: 'lunaris.pro/commands',
				image: lunarisCommands,
			},
			{
				label: 'Profile page',
				url: 'lunaris.pro/profile',
				image: lunarisProfile,
			},
			{
				label: 'Servers page',
				url: 'lunaris.pro/servers',
				image: lunarisServers,
			},
			{
				label: 'Dashboard page',
				url: 'lunaris.pro/dashboard',
				image: lunarisDashboard,
			},
			{
				label: 'Levels module',
				url: 'lunaris.pro/dashboard/levels',
				image: lunarisLevels,
			},
			{
				label: 'Interactive roles module',
				url: 'lunaris.pro/dashboard/interactive-roles',
				image: lunarisInteractiveRoles,
			},
			{
				label: 'Embeds module',
				url: 'lunaris.pro/dashboard/embeds',
				image: lunarisEmbeds,
			},
		],
	},
];

export default projects;
