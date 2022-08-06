import { ProjectCardProps } from '@components/views/Projects/ProjectCard';

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
		thumbnail: 'src/assets/projects/lunaris/home_page.png',
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
				image: 'src/assets/projects/lunaris/home_page.png',
			},
			{
				label: 'Commands page',
				url: 'lunaris.pro/commands',
				image: 'src/assets/projects/lunaris/commands_page.png',
			},
			{
				label: 'Profile page',
				url: 'lunaris.pro/profile',
				image: 'src/assets/projects/lunaris/profile_page.png',
			},
			{
				label: 'Servers page',
				url: 'lunaris.pro/servers',
				image: 'src/assets/projects/lunaris/servers_page.png',
			},
			{
				label: 'Dashboard page',
				url: 'lunaris.pro/dashboard',
				image: 'src/assets/projects/lunaris/dashboard_page.png',
			},
			{
				label: 'Levels module',
				url: 'lunaris.pro/dashboard/levels',
				image: 'src/assets/projects/lunaris/levels_module.png',
			},
			{
				label: 'Interactive roles module',
				url: 'lunaris.pro/dashboard/interactive-roles',
				image: 'src/assets/projects/lunaris/interactive_roles_module.png',
			},
			{
				label: 'Embeds module',
				url: 'lunaris.pro/dashboard/embeds',
				image: 'src/assets/projects/lunaris/embeds_module.png',
			},
		],
	},
];

export default projects;
