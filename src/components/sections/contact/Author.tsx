import { ReactNode } from "react";

import { FaXTwitter, FaGithub, FaInstagram, FaBriefcase } from "react-icons/fa6";
import { LiaUser } from "react-icons/lia";
import { RiExternalLinkLine } from "react-icons/ri";

import Container from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import SmartLink from "@/components/common/SmartLink";

/**
 * Represents a link with an href and display text.
 */
type SocialLink = {
	icon: ReactNode;
	link: string;
	platform: string;
	handle: string;
};

/**
 * List of social/contact links for the author.
 * Each link includes an href (URL) and display text.
 */
const socialLinks: SocialLink[] = [
	{
		icon: <FaGithub />,
		link: "https://github.com/vijayhardaha",
		platform: "GitHub",
		handle: "@vijayhardaha",
	},
	{
		icon: <FaInstagram />,
		link: "https://instagram.com/vegan.vijay",
		platform: "Instagram",
		handle: "@vegan.vijay",
	},
	{
		icon: <FaXTwitter />,
		link: "https://x.com/vijayhardaha",
		platform: "X (formerly Twitter)",
		handle: "@vijayhardaha",
	},
	{
		icon: <FaBriefcase />,
		link: "https://pph.me/vijayhardaha",
		platform: "PeoplePerHour",
		handle: "@vijayhardaha",
	},
];

/**
 * This component displays the author information and contact
 * details for the Vegan Ipsum project.
 *
 * @returns {ReactNode} The rendered component.
 */
export default function Author(): ReactNode {
	return (
		<Section
			id="author"
			className="bg-secondary-muted"
			aria-label="Author information and contact details for Vegan Ipsum"
		>
			<Container>
				<SectionHeader
					heading="Author Contact Links"
					tagline="Get In Touch"
					icon={<LiaUser className="h-4 w-4" />}
				>
					<p>
						Connect directly with the creator of Vegan Ipsum, collaborate on new
						features, provide feedback, or discuss potential partnerships. Whether
						you&apos;re a fellow developer, designer, content creator, or vegan
						advocate, all inquiries are warmly welcomed.
					</p>

					<div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
						{socialLinks.map((social: SocialLink, index) => (
							<SmartLink
								key={index}
								href={social.link}
								linkLine={false}
								className="border-secondary/20 from-secondary-200/20 via-secondary-200/50 to-secondary-200 flex flex-col items-center rounded-2xl border bg-gradient-to-br p-6 text-center no-underline transition-all hover:-translate-y-1 hover:no-underline"
							>
								<div className="text-secondary-dark mb-2 text-3xl">
									{social.icon}
								</div>
								<h3 className="text-primary-solid font-sans text-sm font-bold">
									{social.platform}
								</h3>
								<p className="text-secondary-dark inline-flex items-center gap-0.5 text-sm">
									{social.handle} <RiExternalLinkLine />
								</p>
							</SmartLink>
						))}
					</div>

					<p>
						For business inquiries, collaboration proposals, bug reports, or general
						feedback about Vegan Ipsum, please don&apos;t hesitate to get in touch. Your
						input helps improve the project and ensures Vegan Ipsum remains a valuable
						resource for the ethical design and development community.
					</p>
				</SectionHeader>
			</Container>
		</Section>
	);
}
