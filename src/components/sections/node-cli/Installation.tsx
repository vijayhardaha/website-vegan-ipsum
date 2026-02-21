import { ReactNode } from "react";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import CodeBlock from "@/components/primitives/CodeBlock";

/**
 * This component renders the installation section for the Node CLI page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Installation(): ReactNode {
	return (
		<Section
			id="installation"
			aria-label="Installation instructions for the Vegan Ipsum Node CLI"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader heading="Installation">
					<p className="mb-8">
						Install the Vegan Ipsum CLI globally to make the <code>vegan-ipsum</code>{" "}
						command available from any directory in your terminal.
					</p>

					<CodeBlock label="Global Install (npm)" language="bash">
						npm install -g vegan-ipsum
					</CodeBlock>

					<p>
						Ensure that <code>Node.js</code> and <code>npm</code> are installed on your
						system before running the command.
					</p>

					<p>After installation, verify that everything is working correctly:</p>

					<CodeBlock label="Verify Installation" language="bash">
						vegan-ipsum --help
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
