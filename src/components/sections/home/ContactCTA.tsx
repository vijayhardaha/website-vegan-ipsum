import { ReactNode } from "react";

import Link from "next/link";

import SectionHeader from "@/components/composites/SectionHeader";
import Section from "@/components/layout/Section";
import Button from "@/components/primitives/Button";
import Container from "@/components/primitives/Container";
import Icon from "@/components/primitives/Icon";

/**
 * This component renders a call-to-action section
 * encouraging users to connect with the team for questions,
 * contributions, or feedback.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function ContactCTA(): ReactNode {
	return (
		<Section
			aria-label="Section encouraging users to get in touch for questions, contributions, or feedback"
			className="bg-secondary-muted py-20"
		>
			<Container>
				<SectionHeader
					heading={
						<>
							Let&apos;s build something{" "}
							<span className="text-primary">meaningful together</span>
						</>
					}
					tagline="Get in Touch"
					icon={<Icon name="handShake" size={4} />}
					className="mx-auto max-w-xl text-center"
					headingClassName="mx-auto max-w-lg"
				>
					<p className="mb-8">
						We&apos;re building more than a tool, we&apos;re creating a community of
						conscious creators. Whether you want to contribute code, suggest features,
						share feedback, or simply connect with like-minded builders, your voice
						matters here. Let&apos;s make ethical design the standard, not the
						exception.
					</p>

					<Button
						asChild
						variant="primary"
						size="lg"
						aria-label="Navigate to Contact Us page"
					>
						<Link href="/contact">
							Contact <Icon name="arrowRight" />
						</Link>
					</Button>
				</SectionHeader>
			</Container>
		</Section>
	);
}
