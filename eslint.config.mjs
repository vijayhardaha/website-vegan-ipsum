/**
 * ==============================================================================
 * ESLINT FLAT CONFIG
 * ==============================================================================
 * Purpose: Defines linting rules and parser behavior for Next.js, React, and
 * TypeScript to keep code quality and consistency across the repository.
 * Docs: https://eslint.org/docs/latest/use/configure/configuration-files-new
 * ==============================================================================
 */

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
	// --- Global Ignore Paths ---
	// Exclude generated files, build outputs, and environment artifacts.
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

	// --- File Matching Scope ---
	// Restrict linting to JavaScript and TypeScript source files.
	{ files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"] },

	// --- Framework & Plugin Presets ---
	// Keep Prettier last so formatting conflicts are disabled correctly.
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
		// --- Language & Parser Options ---
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: { ...globals.browser, ...globals.node },
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				tsconfigRootDir: __dirname,
			},
		},

		// --- Shared Plugin Settings ---
		settings: { react: { version: "detect" } },

		// --- Project Rule Overrides ---
		rules: {
			// React 17+ JSX transform does not require React in scope.
			"react/react-in-jsx-scope": "off",
			// Allow SVG and global attributes used by the current project setup.
			"react/no-unknown-property": [
				"error",
				{ ignore: ["jsx", "global"] },
			],

			// Surface formatting issues as warnings through ESLint.
			"prettier/prettier": "warn",

			// Enforce deterministic import grouping and ordering.
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
					alphabetize: { order: "asc", caseInsensitive: true },
					"newlines-between": "always",
					warnOnUnassignedImports: true,
				},
			],

			// Require cleanup of unused values while allowing underscore-prefixed intent.
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
