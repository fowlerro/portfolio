module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:jest/recommended',
		'plugin:jest-dom/recommended',
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['jsx-a11y', 'prettier', '@typescript-eslint', 'jest'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: ['./tsconfig.json'],
			},
		},
	},
	rules: {
		'no-unused-vars': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
		'react/require-default-props': ['off'],
		'react/jsx-key': 'error',
		'react/jsx-props-no-spreading': 'off',
		'import/extensions': ['off'],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react'],
		},
	],
};
