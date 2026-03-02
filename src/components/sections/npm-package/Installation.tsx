import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import CodeBlock from "@/components/primitives/CodeBlock";
import Container from "@/components/primitives/Container";

/**
 * This component renders the installation section for the NPM Package page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Installation(): JSX.Element {
	return (
		<Section
			id="installation"
			aria-label="Installation instructions for the Vegan Ipsum NPM package"
			className="bg-secondary-muted"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Library{" "}
							<span className="text-primary">Installation</span>
						</>
					}
					tagline="Package Management"
					icon="download"
				>
					<p>
						Install <code>vegan-ipsum</code> using your preferred{" "}
						<SmartLink
							href="https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager"
							aria-label="Learn about package managers in Node.js"
						>
							package manager
						</SmartLink>
						. A local installation is recommended for application
						development, while a global installation allows you to
						utilize the library as a{" "}
						<SmartLink
							href="https://en.wikipedia.org/wiki/Command-line_interface"
							aria-label="Learn more about command-line interfaces"
						>
							CLI tool
						</SmartLink>{" "}
						for quick text generation.
					</p>

					<h3 className="mt-8 mb-2 text-lg">Local Installation</h3>
					<p>
						Adds <code>vegan-ipsum</code> to your project&apos;s
						dependencies.
					</p>

					<CodeBlock label="npm" language="bash">
						npm install vegan-ipsum
					</CodeBlock>

					<CodeBlock label="Yarn" language="bash">
						yarn add vegan-ipsum
					</CodeBlock>

					<CodeBlock label="pnpm" language="bash">
						pnpm add vegan-ipsum
					</CodeBlock>

					<h3 className="mt-12 mb-2 text-lg">Global Installation</h3>
					<p>
						Installs the package globally so you can use it from the
						command line anywhere on your system.
					</p>

					<CodeBlock label="npm (global)" language="bash">
						npm install -g vegan-ipsum
					</CodeBlock>
				</SectionHeader>
			</Container>
		</Section>
	);
}
