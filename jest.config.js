// eslint-disable-next-line import/no-extraneous-dependencies
import { pathsToModuleNameMapper } from 'ts-jest';

import tsconfig from './tsconfig.json' assert { type: 'json' };

export default {
	preset: 'ts-jest',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
	globals: {
		'ts-jest': {
			isolatedModules: true,
		},
	},
};
