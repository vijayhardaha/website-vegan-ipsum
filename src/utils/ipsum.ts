/**
 * Type definition for the different types of units that can be generated (paragraphs, sentences, or words).
 */
export type LoremType = 'paragraphs' | 'sentences' | 'words';

/**
 * Fetches vegan ipsum text from the API.
 *
 * @param {LoremType} type - The type of units to generate.
 * @param {string} amount - The number of units to generate.
 * @param {AbortSignal} [signal] - Optional AbortSignal for request cancellation.
 *
 * @returns {Promise<string>} The generated ipsum text.
 */
export async function fetchIpsum(type: LoremType, amount: string, signal?: AbortSignal): Promise<string> {
  const response = await fetch(`/api?count=${Number(amount)}&units=${type}&format=plain`, { signal });

  if (!response.ok) {
    throw new Error('Failed to generate text');
  }

  const data: { text: string } = await response.json();

  return data.text;
}
