import { ReactNode } from "react";

import Container from "@/components/composites/Container";
import Section from "@/components/composites/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";

/**
 * This component renders the installation section for the Node CLI page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Reseources(): ReactNode {
	return (
		<Section
			id="resources"
			aria-label="Tips, best practices, and additional resources for the Vegan Ipsum Node CLI"
		>
			<Container>
				<SectionHeader heading="Tips, Best Practices & Resources">
					<p>
						Get the most out of the Vegan Ipsum CLI by incorporating it into your
						workflow efficiently and exploring additional resources for deeper
						integration.
					</p>

					<h3 className="mt-8 mb-2 text-lg">Tips & Best Practices:</h3>

					<ul className="list-disc space-y-2 pl-8">
						<li>
							Integrate the CLI into shell scripts or automation pipelines to
							dynamically generate placeholder content during builds or testing.
						</li>

						<li>
							Use the <code>--copy</code> flag alongside clipboard managers to
							streamline quick copy-paste workflows.
						</li>

						<li>
							Combine with command-line tools like <code>grep</code>, <code>awk</code>
							, or <code>sed</code> for advanced text filtering and processing.
						</li>

						<li>
							Experiment with different counts and units to produce varied, randomized
							output for mockups and demos.
						</li>

						<li>
							Use the <code>--format html</code> option for rapid web prototyping
							without manually adding markup.
						</li>
					</ul>

					<h3 className="mt-8 mb-2 text-lg">Additional Resources:</h3>

					<p>
						If you want to integrate vegan ipsum programmatically or customize the
						generator further, explore the{" "}
						<SmartLink
							href="/npm-package"
							className="text-primary font-medium underline"
						>
							Vegan Ipsum NPM Package
						</SmartLink>{" "}
						documentation for detailed API references and usage examples.
					</p>

					<p>
						You can also visit the{" "}
						<SmartLink
							href="https://www.npmjs.com/package/vegan-ipsum"
							className="text-primary underline"
							aria-label="Official Vegan Ipsum NPM package page"
						>
							official npm package page
						</SmartLink>{" "}
						to view installation statistics, version history, and community feedback.
					</p>

					<p>
						For bug reports, feature requests, or contributions, visit the GitHub
						repository linked on the npm page.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
