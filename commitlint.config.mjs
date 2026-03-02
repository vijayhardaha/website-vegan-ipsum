/**
 * ==============================================================================
 * COMMITLINT CONFIGURATION
 * ==============================================================================
 * Purpose: Validates commit messages against Conventional Commit rules to keep
 * history readable and automation-friendly (release notes, changelog tooling).
 * Docs: https://commitlint.js.org/
 * ==============================================================================
 */

/** @type {import('@commitlint/types').UserConfig} */
const config = {
	// --- Base Ruleset ---
	// Extend the standard Conventional Commits preset
	extends: ["@commitlint/config-conventional"],

	// --- Commit Message Constraints ---
	rules: {
		// Keep commit headers concise for readable one-line history output
		"header-max-length": [2, "always", 50],

		// Keep body lines terminal-friendly and easy to scan in reviews
		"body-max-line-length": [2, "always", 72],

		// Enforce lowercase subjects for consistent style across contributors
		"subject-case": [2, "always", ["lower-case"]],
	},
};

export default config;
