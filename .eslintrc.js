module.exports = {
	env: {
		'jest/globals': true,
	},
	root: true,
	plugins: ['unused-imports', 'sonarjs'],
	extends: [
		'@react-native',
		'airbnb',
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:sonarjs/recommended',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['plugins/**/*', 'metro.config.js'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: ['./tsconfig.json'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
			typescript: {},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'global-require': 0,
		'react-hooks/exhaustive-deps': 'off',
		quotes: ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'react/require-default-props': 'off',
		'react/default-props-match-prop-types': ['error'],
		'react/sort-prop-types': ['error'],
		'react/no-array-index-key': 'off',
		'no-tabs': 'off',
		'no-void': 'off',
		'import/no-cycle': 'off',
		'import/namespace': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/display-name': 'off',
		'react/function-component-definition': 'off',
		'react/no-unstable-nested-components': 'off',
		'unused-imports/no-unused-imports': 'error',
		'sonarjs/no-duplicate-string': 'warn',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				endOfLine: 'auto',
				tabWidth: 2,
				indentStyle: 'space',
				useTabs: true,
				arrowParens: 'avoid',
				bracketSameLine: false,
				singleQuote: true,
				trailingComma: 'all',
			},
		],
	},

	overrides: [
		{
			files: ['*.js'], // Include only JavaScript files
			excludedFiles: [], // Exclude ReactotronConfig.js
		},
	],
};
