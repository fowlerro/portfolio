module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'airbnb',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'jest', 'simple-import-sort', 'prettier'],
	settings: {
		'import/resolver': {
			typescript: {
				project: ['./tsconfig.json'],
			},
		},
	},
	rules: {
		'import/extensions': ['off'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
		],
	},
};
