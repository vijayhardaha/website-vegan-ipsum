import { ReactNode } from "react";

import PageHeader from "@/components/common/PageHeader";
import {
	Introduction,
	BaseUrl,
	RequestMethods,
	Parameters,
	GetRequestExample,
	PostRequestExample,
	ResponseFormat,
	ErrorHandling,
	StatusCodes,
} from "@/components/sections/json-api";
import { buildMetadata } from "@/utils/seo";

/**
 * SEO metadata for the JSON API page.
 */
export const metadata = buildMetadata({
	title: "JSON API",
	description:
		"Fetch plant-based, cruelty-free placeholder text for your apps, websites, or projects using the lightweight Vegan Ipsum JSON API — perfect for ethical developers.",
	slug: "json-api",
});

/**
 * The main page for the Vegan Ipsum JSON API documentation.
 *
 * @returns {ReactNode} The rendered JsonApiPage component.
 */
export default function JsonApiPage(): ReactNode {
	return (
		<>
			<PageHeader
				title={
					<>
						Vegan Ipsum <span className="text-primary">JSON API</span>
					</>
				}
				description="Fetch vegan-inspired placeholder text for your apps and projects. This API provides paragraphs, sentences, or words in plain or HTML format."
				tagline="REST API &bull; v1"
			>
				<div className="mt-6 flex flex-wrap gap-3">
					{[
						"🔓 No auth required",
						"⚡ GET & POST",
						"🌿 JSON responses",
						"📄 Plain & HTML formats",
					].map((feature, index) => (
						<span
							key={index}
							className="border-border inline-flex items-center gap-1.5 rounded-md border bg-white px-3 py-1.5 text-xs font-bold shadow-sm"
						>
							{feature}
						</span>
					))}
				</div>
			</PageHeader>

			<Introduction />

			<BaseUrl />

			<RequestMethods />

			<Parameters />

			<GetRequestExample />

			<PostRequestExample />

			<ResponseFormat />

			<ErrorHandling />

			<StatusCodes />
		</>
	);
}
