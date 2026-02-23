import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component outlines the HTTP request methods supported by the Vegan Ipsum JSON API.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function RequestMethods(): JSX.Element {
	return (
		<Section
			id="request-methods"
			aria-label="HTTP request methods supported by the Vegan Ipsum JSON API"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Request <span className="text-primary">Methods</span>
						</>
					}
					tagline="HTTP Protocol"
					icon="exchange"
				>
					<p>
						The Vegan Ipsum API supports the following HTTP request methods to fetch
						your vegan-themed placeholder text. Both return the same JSON response
						structure and support all available parameters.
					</p>

					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="border-border rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
							<div className="mb-3 flex items-center gap-3">
								<span className="bg-primary-muted text-primary-dark rounded-2xl px-3 py-1 font-mono text-sm font-bold">
									GET
								</span>
								<h3 className="text-lg">Query Parameters</h3>
							</div>
							<p className="text-sm leading-relaxed">
								Send parameters as query strings appended to the URL. Ideal for
								quick requests and easy testing via browser or command line.
							</p>
						</div>

						<div className="border-border rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
							<div className="mb-3 flex items-center gap-3">
								<span className="bg-secondary-muted text-secondary-dark rounded-2xl px-3 py-1 font-mono text-sm font-bold">
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
