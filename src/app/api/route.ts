import { NextResponse } from 'next/server';

/**
 * Edge runtime configuration for faster response times.
 */
export const runtime = 'edge';

/**
 * Unit type for lorem generation.
 *
 * @type {LoremUnit}
 */
type LoremUnit = 'paragraphs' | 'sentences' | 'words';

/**
 * Output format for lorem text.
 *
 * @type {LoremFormat}
 */
type LoremFormat = 'plain' | 'html';

const VALID_UNITS: LoremUnit[] = ['paragraphs', 'sentences', 'words'];

/**
 * Validates the count parameter.
 *
 * @param {number} count - The count value to validate.
 *
 * @returns {{ valid: true } | { valid: false; error: string }} Validation result.
 */
function validateCount(count: number): { valid: true } | { valid: false; error: string } {
  if (isNaN(count) || count < 1 || count > 100) {
    return { valid: false, error: 'Invalid count. Please provide a number between 1 and 100.' };
  }

  return { valid: true };
}

/**
 * Validates the units parameter.
 *
 * @param {string} units - The unit type to validate.
 *
 * @returns {{ valid: true } | { valid: false; error: string }} Validation result.
 */
function validateUnits(units: string): { valid: true } | { valid: false; error: string } {
  if (!VALID_UNITS.includes(units as LoremUnit)) {
    return { valid: false, error: "Invalid units. Please use 'paragraphs', 'sentences', or 'words'." };
  }

  return { valid: true };
}

/**
 * Generates vegan ipsum text based on the provided parameters.
 *
 * @param {number} count - The number of units to generate (e.g., paragraphs, sentences, or words).
 * @param {LoremUnit} units - The type of units to generate ('paragraphs', 'sentences', or 'words').
 *
 * @returns {Promise<NextResponse>} A JSON response containing the generated text.
 */
function validateParams(count: number, units: LoremUnit): string | null {
  const countValidation = validateCount(count);
  if (!countValidation.valid) return countValidation.error;

  const unitsValidation = validateUnits(units);
  if (!unitsValidation.valid) return unitsValidation.error;

  return null;
}

async function generateIpsum(count: number, units: LoremUnit, format: LoremFormat): Promise<NextResponse> {
  const validationError = validateParams(count, units);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    const { veganIpsum } = await import('vegan-ipsum');
    const ipsumText = veganIpsum({ count, units, format });

    return NextResponse.json({ text: ipsumText });
  } catch (error) {
    return NextResponse.json(
      {
        error: `An unexpected error occurred while generating ipsum text: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
      { status: 500 }
    );
  }
}

/**
 * Handles GET requests to generate vegan ipsum text.
 *
 * @param {Request} request - The incoming HTTP request.
 *
 * @returns {Promise<NextResponse>} A JSON response containing the generated text.
 */
export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const count = parseInt(searchParams.get('count') || '3', 10);
  const units: LoremUnit = (searchParams.get('units') as LoremUnit) || 'paragraphs';
  const format: LoremFormat = (searchParams.get('format') as LoremFormat) || 'plain';

  return generateIpsum(count, units, format);
}
