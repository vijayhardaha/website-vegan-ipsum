import type { JSX } from "react";

import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";
import Section from "@/components/layout/Section";
import Container from "@/components/primitives/Container";

/**
 * This component renders the support section of the VS Code Extension page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export default function Support(): JSX.Element {
	return (
		<Section
			id="support"
			aroia-label="Support and feedback for the Vegan Ipsum VS Code Extension"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Support & <span className="text-primary">Feedback</span>
						</>
					}
					tagline="Found a Bug?"
					icon="bug"
				>
					<p>
						As an independently developed extension, I rely heavily on user feedback to
						squash bugs and prioritize updates. If something isn&apos;t working as
						expected or if you have a feature request please let me know by submitting
						an issue on our{" "}
						<SmartLink
							href="https://github.com/vijayhardaha/vscode-vegan-ipsum/issues"
							className="text-primary"
							aria-label="Vegan Ipsum VS Code Extension GitHub Issues Page"
						>
							GitHub Page
						</SmartLink>
					</p>
					<p></p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
