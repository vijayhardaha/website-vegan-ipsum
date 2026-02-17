import { NextResponse } from "next/server";
import { veganIpsum } from "vegan-ipsum";
import { LoremFormat } from "vegan-ipsum/types/src/constants/formats";
import { LoremUnit } from "vegan-ipsum/types/src/constants/units";

/**
 * Generates vegan ipsum text based on the provided parameters.
 *
 * @param {number} count - The number of units to generate (e.g., paragraphs, sentences, or words).
 * @param {LoremUnit} units - The type of units to generate ('paragraphs', 'sentences', or 'words').
 * @param {LoremFormat} format - The format of the output ('plain' or 'html').
 * @returns {NextResponse} A JSON response containing the generated text.
 */
function generateIpsum(count: number, units: LoremUnit, format: LoremFormat): NextResponse {
	try {
		if (isNaN(count) || count < 1 || count > 100) {
			return NextResponse.json(
				{ error: "Invalid count. Please provide a number between 1 and 100." },
				{ status: 400 }
			);
		}

		if (!["paragraphs", "sentences", "words"].includes(units)) {
			return NextResponse.json(
				{ error: "Invalid units. Please use 'paragraphs', 'sentences', or 'words'." },
				{ status: 400 }
			);
		}

		const ipsumText = veganIpsum({ count, units, format });

		return NextResponse.json({ text: ipsumText });
	} catch (error) {
		return NextResponse.json(
			{
				error: `An unexpected error occurred while generating ipsum text: ${error instanceof Error ? error.message : "Unknown error"}`,
			},
			{ status: 500 }
		);
	}
}

/**
 * Handles GET requests to generate vegan ipsum text.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Promise<NextResponse>} A JSON response containing the generated text.
 */
export async function GET(request: Request): Promise<NextResponse> {
	const { searchParams } = new URL(request.url);
	const count = parseInt(searchParams.get("count") || "3", 10);
	const units: LoremUnit = (searchParams.get("units") as LoremUnit) || "paragraphs";
	const format: LoremFormat = (searchParams.get("format") as LoremFormat) || "plain";

	return generateIpsum(count, units, format);
}

/**
 * Handles POST requests to generate vegan ipsum text.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Promise<NextResponse>} A JSON response containing the generated text.
 */
export async function POST(request: Request): Promise<NextResponse> {
	const body = await request.json();
	const count = parseInt(body.count || "3", 10);
	const units: LoremUnit = body.units || "paragraphs";
	const format: LoremFormat = body.format || "plain";

	return generateIpsum(count, units, format);
}
