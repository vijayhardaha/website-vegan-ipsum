import type { JSX } from "react";

import { Metadata } from "next";

import PageHeader from "@/components/composites/PageHeader";
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
import { buildMetadata } from "@/utils/meta";

const seoTitle = "Vegan Ipsum API - Free JSON Placeholder Text API";
const seoDescription =
	"Access the Vegan Ipsum REST API to fetch ethical, plant-based placeholder text for your web apps. High-performance JSON endpoints for conscious developers.";
const pageTitle = (
	<>
		Fetch Ethical placeholder text via the <span className="text-primary">Vegan Ipsum API</span>
	</>
);
const pageDescription =
	"Build dynamic, cruelty-free mockups with our lightweight REST API. Integrate plant-based placeholder text directly into your frontend or backend applications via simple JSON endpoints. This API provides paragraphs, sentences, or words in plain or HTML format.";
const pageTags = [
	"🔓 No Auth Required",
	"🔁 GET & POST",
	"🧾 JSON Responses",
	"📝 Plain & HTML Formats",
];

/**
 * SEO metadata for the page.
 */
export const metadata: Metadata = buildMetadata({
	seoTitle,
	seoDescription,
	pageSlug: "json-api",
});

/**
 * This component renders the JSON API page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function JsonAPIPage(): JSX.Element {
	return (
		<>
			<PageHeader title={pageTitle} description={pageDescription} tags={pageTags} />

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
