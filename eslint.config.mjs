import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

export default defineConfig([
	globalIgnores([
		"**/.next/",
		"**/.github/",
		"**/.git/",
		"**/node_modules/",
		"**/build/",
		"**/dist/",
		"**/.env",
		"**/.env.local",
		"**/*.log",
		"**/*.tsbuildinfo",
	]),

	{ files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"] },

	// all conflicting ESLint formatting rules before Prettier takes over
	...compat.extends(
		"next",
		"next/core-web-vitals",
		"next/typescript",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended" // ← always last
	),

	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.browser,
				...globals.node,
			},
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				tsconfigRootDir: __dirname,
			},
		},

		settings: {
			react: {
				version: "detect",
			},
		},

		rules: {
			"react/react-in-jsx-scope": "off",
			"react/no-unknown-property": [
				"error",
				{
					ignore: ["jsx", "global"],
				},
			],

			"prettier/prettier": "warn",

			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
					],
					pathGroups: [
						{
							pattern: "react",
							group: "external",
							position: "before",
						},
						{
							pattern: "@/**",
							group: "internal",
							position: "after",
						},
					],
					pathGroupsExcludedImportTypes: ["react"],
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
					"newlines-between": "always",
					warnOnUnassignedImports: true,
				},
			],

			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
					ignoreRestSiblings: true,
					caughtErrors: "all",
				},
			],
		},
	},
]);
