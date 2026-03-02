/**
 * ==============================================================================
 * POSTCSS CONFIGURATION
 * ==============================================================================
 * Purpose: Registers PostCSS plugins used by the styling pipeline.
 * Docs: https://github.com/postcss/postcss/blob/main/docs/config.md
 * ==============================================================================
 */

// --- Plugin Pipeline ---
// Register Tailwind CSS PostCSS integration for utility class processing.
const config = { plugins: ["@tailwindcss/postcss"] };

// Export configuration for PostCSS consumers.
export default config;
