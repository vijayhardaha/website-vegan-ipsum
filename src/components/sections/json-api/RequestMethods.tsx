import { ReactNode } from "react";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/composites/SectionHeader";

/**
 * This component outlines the HTTP request methods supported by the Vegan Ipsum JSON API.
 * It explains the two primary methods, GET and POST, and how they can be used to
 * send parameters for generating vegan-themed placeholder text.
 * The section is designed to help developers understand the different
 * ways to interact with the API based on their specific use cases.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function RequestMethods(): ReactNode {
	return (
		<Section
			id="request-methods"
			aria-label="HTTP request methods supported by the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader heading="Request Methods">
					<p>
						The Vegan Ipsum API supports the following HTTP request methods to fetch
						your vegan-themed placeholder text. Both return the same JSON response
						structure and support all available parameters.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="border-border rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
							<div className="mb-3 flex items-center gap-3">
								<span className="bg-primary-muted text-primary-dark rounded-lg px-3 py-1 font-mono text-sm font-bold">
									GET
								</span>
								<h3 className="text-lg">Query Parameters</h3>
							</div>
							<p className="text-sm leading-relaxed">
								Send parameters as query strings appended to the URL. Ideal for
								quick requests and easy testing via browser or command line.
							</p>
						</div>

						<div className="border-border rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
							<div className="mb-3 flex items-center gap-3">
								<span className="bg-secondary-muted text-secondary-dark rounded-lg px-3 py-1 font-mono text-sm font-bold">
									POST
								</span>
								<h3 className="text-lg">JSON Body</h3>
							</div>
							<p className="text-sm leading-relaxed">
								Send parameters as JSON in the request body. Use for complex queries
								or when integrating the API in client-server applications.
							</p>
						</div>
					</div>
				</SectionHeader>
			</Container>
		</Section>
	);
}
