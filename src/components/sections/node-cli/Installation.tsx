import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component renders the installation section for the Node CLI page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Installation(): JSX.Element {
	return (
		<Section
			id="installation"
			aria-label="Installation instructions for the Vegan Ipsum Node CLI"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							CLI{" "}
							<span className="text-primary">Installation</span>
						</>
					}
					tagline="Global Setup"
					icon="download"
				>
					<p className="mb-8">
						Install <code>vegan-ipsum</code> globally to access the
						command-line interface from any directory. This ensures
						that generating plant-based placeholder text is always
						just a few keystrokes away.
					</p>

					<CodeBlock label="Global Install (npm)" language="bash">
						npm install -g vegan-ipsum
					</CodeBlock>

					<p>
						Before proceeding, ensure you have{" "}
						<SmartLink
							href="https://nodejs.org/"
							aria-label="Download Node.js"
						>
							Node.js
						</SmartLink>{" "}
						and{" "}
						<SmartLink
							href="https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager"
							aria-label="Learn about npm package manager"
						>
							npm
						</SmartLink>{" "}
						installed on your system.
					</p>

					<p>
						After the installation is complete, verify that the
						package is accessible in your{" "}
						<SmartLink
							href="https://en.wikipedia.org/wiki/PATH_(variable)"
							aria-label="Learn about the PATH environment variable"
						>
							PATH
						</SmartLink>{" "}
						by running the help command:
					</p>

					<CodeBlock label="Verify Installation" language="bash">
						vegan-ipsum --help
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
