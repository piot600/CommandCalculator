import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			js,
			prettier: eslintPluginPrettier,
		},
		extends: ['js/recommended', eslintConfigPrettier],
	},
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		files: ['webpack.config.js'],
		languageOptions: {
			globals: globals.node,
		},
	},
	{
		files: ['**/*.test.js'],
		languageOptions: {
			globals: globals.jest,
		},
	},
	{
		rules: {
			'capitalized-comments': ['error', 'always'],
			'prettier/prettier': 'error',
			//'no-console': 'error',
		},
	},
	globalIgnores(['dist/*', 'babel.config.js']),
]);
