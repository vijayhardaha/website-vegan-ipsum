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
						Customize the API output using the following request parameters. These
						options provide full control over the volume, unit type, and format of the
						generated placeholder text to perfectly fit your UI layout.
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
										The number of units to generate. Accepts an integer between{" "}
										<code>1</code> and <code>100</code>.
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
										The type of text unit. Accepted values are{" "}
										<code>paragraphs</code>, <code>sentences</code>, or{" "}
										<code>words</code>.
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
										The output format. Use <code>plain</code> for raw text
										strings or <code>html</code> to wrap paragraphs in{" "}
										<code>&lt;p&gt;</code> tags.
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<InfoBox>
						Use the <code>format=html</code> parameter when injecting content directly
						into web pages. This preserves the intended paragraph structure without
						requiring additional processing on the client side.
					</InfoBox>
				</SectionHeader>
			</Container>
		</Section>
	);
}
