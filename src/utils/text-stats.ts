/**
 * Calculates the number of paragraphs in the given text.
 *
 * @param {string} text - The text to analyze.
 *
 * @returns {number} The paragraph count.
 */
export const calculateParagraphs = (text: string): number =>
  text.split('\n').filter((line) => line.trim() !== '').length;

/**
 * Calculates the number of words in the given text.
 *
 * @param {string} text - The text to analyze.
 *
 * @returns {number} The word count.
 */
const calculateWords = (text: string): number => text.split(/\s+/).filter((word) => word.trim() !== '').length;

/**
 * Calculates the byte size of the given text.
 *
 * @param {string} text - The text to analyze.
 *
 * @returns {number} The byte size.
 */
const calculateBytes = (text: string): number => new TextEncoder().encode(text).length;

/**
 * Builds a summary string for the generated output.
 *
 * @param {string} text - The generated output text.
 *
 * @returns {string} The summary message (e.g., "3 paragraphs • 45 words • 256 bytes").
 */
export const getOutputSummary = (text: string): string =>
  `${calculateParagraphs(text)} paragraphs • ${calculateWords(text)} words • ${calculateBytes(text)} bytes`;
