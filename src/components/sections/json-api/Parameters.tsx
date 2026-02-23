import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";
import InfoBox from "@/components/primitives/InfoBox";

/**
 * This component renders the "Parameters" section of the Vegan Ipsum JSON API documentation.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Parameters(): JSX.Element {
	return (
		<Section id="parameters" aria-label="Parameters for customizing Vegan Ipsum output">
			<Container>
				<SectionHeader
					heading={
						<>
							Query <span className="text-primary">Parameters</span>
						</>
					}
					tagline="Customization"
					icon="sliders"
				>
					<p>
						Customize the output using the following parameters. These give you full
						control over the amount, type, and format of placeholder text to perfectly
						fit your UI layout.
					</p>

					<div className="table-container mt-8">
						<table className="table">
							<thead>
								<tr>
									<th>Name</th>
									<th>Type</th>
									<th>Required</th>
									<th>Default</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<code>count</code>
									</td>
									<td>
										<code>number</code>
									</td>
									<td>No</td>
									<td>
										<code>3</code>
									</td>
									<td>
										How many units to generate. Valid range:
										<code>1</code>-<code>100</code>.
									</td>
								</tr>
								<tr>
									<td>
										<code>units</code>
									</td>
									<td>
										<code>string</code>
									</td>
									<td>No</td>
									<td>
										<code>paragraphs</code>
									</td>
									<td>
										Type of text unit. Accepts <code>paragraphs</code>,{" "}
										<code>sentences</code>, or <code>words</code>.
									</td>
								</tr>
								<tr>
									<td>
										<code>format</code>
									</td>
									<td>
										<code>string</code>
									</td>
									<td>No</td>
									<td>
										<code>plain</code>
									</td>
									<td>
										Output format. Use <code>plain</code> for raw text or{" "}
										<code>html</code> for formatted HTML output.
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<InfoBox>
						Use <code>format=html</code> when injecting content directly into web pages
						to preserve paragraph and sentence structure without extra processing.
					</InfoBox>
				</SectionHeader>
			</Container>
		</Section>
	);
}
