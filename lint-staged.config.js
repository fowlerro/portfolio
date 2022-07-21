export default {
	'*.{ts,tsx}': () => ['yarn prettier:fix', 'yarn validate'],
};
