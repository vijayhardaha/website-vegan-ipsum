import { ReactNode } from "react";

import { LiaBugSolid } from "react-icons/lia";

import Container from "@/components/primitives/Container";
import Section from "@/components/primitives/Section";
import SectionHeader from "@/components/composites/SectionHeader";
import SmartLink from "@/components/composites/SmartLink";

/**
 * This component renders the support section of the VS Code Extension page.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Support(): ReactNode {
	return (
		<Section
			id="support"
			aroia-label="Support and feedback for the Vegan Ipsum VS Code Extension"
		>
			<Container>
				<SectionHeader
					heading="Support & Feedback"
					tagline="Found a bug"
					icon={<LiaBugSolid className="h-4 w-4" />}
				>
					<p>
						As an independently developed extension, I rely heavily on user feedback to
						squash bugs and prioritize updates. If something isn&apos;t working as
						expected or if you have a feature request please let me know by submitting
						an issue on{" "}
						<SmartLink
							href="https://github.com/vijayhardaha/vscode-vegan-ipsum/issues"
							className="text-primary"
							aria-label="Vegan Ipsum VS Code Extension GitHub Issues Page"
						>
							GitHub Issues Page
						</SmartLink>{" "}
						. I don&apos;t have a social media presence for this project, so GitHub is
						the best and only way to get in touch!
					</p>
					<p></p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
