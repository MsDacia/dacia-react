/* eslint-disable no-magic-numbers */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import cspell from '@cspell/eslint-plugin'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'react-hooks'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: dirname,
	recommendedConfig: js.configs.recommended,
})

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		parser: '@typescript-eslint/parser',
		rules: { 'sort-keys': 'off' },
		root: true,
		settings: { react: { version: '18.3' } },
	},
	{
		ignores: [
			'**/node_modules',
			'**/public',
			'**/test-results',
		],
	},
	...compat.extends(
		'eslint:recommendedTypeChecked',
		'plugin:react/recommended',
		'plugin:@cspell/eslint-plugin/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:react-hooks/recommended',
	),
	{
		plugins: {
			'@cspell': cspell,
			'@stylistic': stylistic,
			'eslint': tseslint,
			react,
			'react-hooks': reactHooks,
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			'@cspell/spellchecker': [
				'warn', {
					autoFix: true,
					cspell: {
						ignoreRegExpList: ['/\\b[A-Z_]+\\b/'],
						language: 'en-US, es',
						words: [
							'2xl',
							'3xl',
							'4xl',
							'5xl',
							'6xl',
							'7xl',
							'8xl',
							'9xl',
							'autofocus',
							'axios',
							'calc',
							'camelcase',
							'camelize',
							'checkbox',
							'checkboxes',
							'clearfix',
							'datepicker',
							'dropdown',
							'fallthrough',
							'frontend',
							'jsx',
							'keydown',
							'keypress',
							'keyup',
							'mailto',
							'maxlength',
							'mdash',
							'nofollow',
							'noindex',
							'noopener',
							'nowrap',
							'readonly',
							'textarea',
							'tooltip',
							'tsx',
							'typestyle',
							'url',
							'Vite',
							'whitespace',
							'yml',
						],
					},
					generateSuggestions: true,
				},
			],
			'@stylistic/array-bracket-newline': ['error', { minItems: 3, multiline: true }],
			'@stylistic/array-bracket-spacing': ['error', 'never'],
			'@stylistic/array-element-newline': [
				'error', {
					ArrayExpression: 'consistent',
					ArrayPattern: { minItems: 3 },
				},
			],
			'@stylistic/arrow-parens': ['error', 'as-needed'],
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',
			'@stylistic/comma-dangle': [
				'error',
				{
					arrays: 'always-multiline',
					exports: 'always-multiline',
					functions: 'never',
					imports: 'always-multiline',
					objects: 'always-multiline',
				},
			],
			'@stylistic/comma-spacing': ['error', { after: true, before: false }],
			'@stylistic/computed-property-spacing': [
				'error',
				'never',
				{ enforceForClassMembers: true },
			],
			'@stylistic/function-call-argument-newline': ['error', 'consistent'],
			'@stylistic/function-call-spacing': ['error', 'never'],
			'@stylistic/indent': [
				'error', 'tab', {
					ArrayExpression: 1,
					FunctionDeclaration: { body: 1, parameters: 1 },
					FunctionExpression: { body: 1, parameters: 1 },
					ImportDeclaration: 1,
					MemberExpression: 1,
					ObjectExpression: 1,
					SwitchCase: 1,
					VariableDeclarator: 1,
					flatTernaryExpressions: true,
					ignoreComments: true,
				},
			],
			'@stylistic/jsx-curly-newline': 'off',
			'@stylistic/jsx-curly-spacing': [
				2, {
					allowMultiline: false,
					objectLiterals: 'never',
					when: 'never',
				},
			],
			'@stylistic/jsx-max-props-per-line': ['error', { maximum: { multi: 3 } }],
			'@stylistic/jsx-quotes': ['error', 'prefer-double'],
			'@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
			'@stylistic/jsx-sort-props': [
				'error',
				{
					callbacksLast: true,
					ignoreCase: true,
					noSortAlphabetically: false,
					reservedFirst: true,
					shorthandFirst: false,
					shorthandLast: false,
				},
			],
			'@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
			'@stylistic/object-curly-newline': [
				'error', {
					ExportDeclaration: { minProperties: 3, multiline: true },
					ImportDeclaration: { minProperties: 3, multiline: true },
					ObjectExpression: { minProperties: 3, multiline: true },
					ObjectPattern: { minProperties: 3, multiline: true },
				},
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					next: 'return',
					prev: '*',
				},
				{
					blankLine: 'always',
					next: ['block-like', 'multiline-block-like'],
					prev: ['block-like', 'multiline-block-like'],
				},
				{
					blankLine: 'always',
					next: '*',
					prev: [
						'const', 'let', 'var',
					],
				},
				{
					blankLine: 'any',
					next: [
						'const', 'let', 'var',
					],
					prev: [
						'const', 'let', 'var',
					],
				},
				{
					blankLine: 'never',
					next: 'empty',
					prev: 'empty',
				},
			],
			'@stylistic/quote-props': ['error', 'as-needed'],
			'@stylistic/semi': ['error', 'never'],
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/space-before-function-paren': [
				'error',
				{
					anonymous: 'always',
					asyncArrow: 'always',
					named: 'never',
				},
			],
			'@stylistic/switch-colon-spacing': 'off',
			'@stylistic/type-annotation-spacing': 'error',

			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					format: null,
					modifiers: ['requiresQuotes'],
					selector: [
						'classProperty',
						'objectLiteralProperty',
						'typeProperty',
						'classMethod',
						'objectLiteralMethod',
						'typeMethod',
						'accessor',
						'enumMember',
					],
				},
				{
					format: [
						'camelCase',
						'PascalCase',
						'UPPER_CASE',
					],
					selector: 'variable',
				},
				{
					format: [
						'camelCase',
						'PascalCase',
						'UPPER_CASE',
					],
					modifiers: ['const'],
					selector: 'variable',
				},
				{
					format: [
						'camelCase',
						'PascalCase',
						'UPPER_CASE',
					],
					leadingUnderscore: 'allow',
					selector: ['variable', 'function'],
				},
				{
					format: [
						'camelCase',
						'PascalCase',
						'UPPER_CASE',
					],
					selector: 'variableLike',
				},
			],
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-this-alias': 'error',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/sort-type-constituents': 'error',

			eqeqeq: 'error',
			'import/order': [
				'error',
				{
					'alphabetize': { order: 'asc', caseInsensitive: true },
					'groups': [
						'builtin',
						'external',
						'internal',
					],
					'newlines-between': 'always',
				}
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'max-len': [
				'error', {
					code: 140,
					ignoreComments: true,
					ignoreStrings: true,
					ignoreTrailingComments: true,
					ignoreUrls: true,
				},
			],
			'no-console': [
				'error', {
					allow: [
						'error',
						'info',
						'time',
						'timeEnd',
						'warn',
					],
				},
			],
			'no-const-assign': 'error',
			'no-duplicate-case': 'error',
			'no-extra-parens': 'error',
			'no-extra-semi': 'error',
			'no-fallthrough': 'error',
			'no-irregular-whitespace': 'error',
			'no-magic-numbers': [
				'error', {
					detectObjects: true,
					enforceConst: true,
					ignore: [
						0,
						1,
						-1,
						'1n',
						2,
						3,
					],
					ignoreArrayIndexes: true,
				},
			],
			'no-multi-spaces': ['error', { ignoreEOLComments: false }],
			'no-trailing-spaces': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'prefer-object-spread': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			'sort-keys': [
				'error', 'asc', {
					allowLineSeparatedGroups: true,
					caseSensitive: true,
					minKeys: 2,
					natural: false,
				},
			],
			'sort-imports': [
				'error',
				{
					'ignoreCase': false,
					'ignoreMemberSort': false,
					'memberSyntaxSortOrder': [
						'none',
						'all',
						'multiple',
						'single',
					]
				}
			],
			'sort-vars': 'error',
			'unicorn/empty-brace-spaces': 'off',
		},
	},
]
/* eslint-enable no-magic-numbers */
