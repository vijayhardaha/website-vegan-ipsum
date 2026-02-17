import PageHeader from "@/components/layout/PageHeader";
import SectionContainer from "@/components/layout/SectionContainer";
import { generateMetadata as genMeta, Metadata } from "@/utils/seoUtils";

/**
 * SEO metadata for the About page.
 * @type {Metadata}
 */
export const metadata: Metadata = genMeta({
	title: "About Vegan Ipsum",
	description:
		"Discover Vegan Ipsum — a lightweight, developer-friendly, plant-based lorem ipsum alternative for ethical and sustainable projects.",
	slug: "about",
});

/**
 * The AboutPage component renders the about page of the Vegan Ipsum website.
 *
 * @returns {React.JSX.Element} The rendered AboutPage component.
 */
export default function AboutPage(): React.JSX.Element {
	return (
		<SectionContainer>
			<PageHeader
				title="About Vegan Ipsum"
				subtitle="A lightweight, developer-friendly lorem ipsum alternative with a vegan theme. Comes as an API, NPM package, CLI, and VS Code extension."
			/>

			<section aria-labelledby="what-is-vegan-ipsum-section" role="region">
				<h2 id="what-is-vegan-ipsum-section" className="mb-2 text-2xl">
					What Is Vegan Ipsum?
				</h2>
				<p className="mb-4">
					Vegan Ipsum is a thoughtfully designed placeholder text generator crafted
					especially for developers, designers, marketers, and content creators who
					prioritize ethical, plant-based, and eco-conscious values. Unlike traditional
					Lorem Ipsum generators, Vegan Ipsum produces filler text infused with
					vegan-themed words and compassionate language, perfectly tailored for projects
					centered around sustainability, animal welfare, and green living. This unique
					approach not only fills your layouts with meaningful content but also reinforces
					your brand’s commitment to ethical principles and conscious messaging.
				</p>
				<p className="mb-4">
					Whether you’re building a vegan lifestyle blog, an environmentally responsible
					e-commerce site, or designing apps and presentations that promote cruelty-free
					products, Vegan Ipsum serves as an ideal placeholder text. It ensures your
					mockups and wireframes resonate authentically with your audience while avoiding
					the generic, uninspired filler text that’s so often overused in the design and
					development industry.
				</p>
				<p>
					Easy to integrate and highly customizable, Vegan Ipsum supports multiple formats
					and delivery methods — from a web-based interface to REST APIs, command-line
					tools, and editor extensions — empowering developers to embed plant-based
					placeholder text into any part of their workflow effortlessly.
				</p>
			</section>

			<section aria-labelledby="background-section" role="region">
				<h2 id="background-section" className="mb-2 text-2xl">
					Background
				</h2>
				<p className="mb-4">
					The idea behind Vegan Ipsum originated from a desire to fill a niche that
					traditional Lorem Ipsum generators have overlooked. While browsing{" "}
					<a
						href="https://loremipsum.io/ultimate-list-of-lorem-ipsum-generators/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:text-primary/80 underline"
						aria-label="Ultimate List of Lorem Ipsum Generators"
					>
						loremipsum.io
					</a>
					, it became clear that many communities create customized placeholder text to
					better reflect their unique identities.
				</p>
				<p className="mb-4">
					However, despite the growing popularity of veganism and plant-based lifestyles
					worldwide, there wasn’t a well-maintained or comprehensive vegan-themed
					placeholder text generator available. This gap inspired the creation of Vegan
					Ipsum — a project aimed at providing ethical designers and developers with a
					fresh, cruelty-free lorem ipsum alternative that speaks to their values.
				</p>
				<p>
					Since its inception, Vegan Ipsum has evolved into a versatile suite of tools
					designed to empower creators, support sustainable brands, and encourage the use
					of meaningful, value-driven content in digital products and presentations.
				</p>
			</section>

			<section aria-labelledby="core-features-section" role="region">
				<h2 id="core-features-section" className="mb-2 text-2xl">
					Core Features
				</h2>
				<ul className="list-inside list-disc space-y-3 pl-4">
					<li>
						<strong>API:</strong> A robust RESTful endpoint allows you to dynamically
						fetch vegan-themed placeholder text for seamless integration with websites,
						mobile apps, and automation workflows.
					</li>
					<li>
						<strong>NPM Package:</strong> Easily install{" "}
						<code className="bg-muted rounded px-1 py-0.5 text-sm">vegan-ipsum</code> in
						your JavaScript or TypeScript projects to generate customizable filler text
						programmatically, perfect for development environments and testing.
					</li>
					<li>
						<strong>CLI Tool:</strong> Command-line interface lets developers generate
						vegan ipsum content directly from their terminal or scripts, speeding up
						workflow without needing to leave the coding environment.
					</li>
					<li>
						<strong>VS Code Extension:</strong> Generate and insert vegan-themed
						placeholder text into your source files with a simple keyboard shortcut
						inside the popular Visual Studio Code editor, streamlining the design and
						coding process.
					</li>
				</ul>
			</section>

			<section aria-labelledby="customization-section" role="region">
				<h2 id="customization-section" className="mb-2 text-2xl">
					Customization Options
				</h2>
				<p className="mb-4">
					Vegan Ipsum is designed with flexibility in mind, allowing users to tailor the
					output to meet the specific needs of their projects. Whether you want short
					bursts of text or long paragraphs, you can fine-tune the content with various
					parameters to fit perfectly within your designs and codebases.
				</p>
				<ul className="mt-2 list-inside list-disc space-y-2 pl-4">
					<li>
						<code>count</code> – Specify the number of text units to generate. This can
						be paragraphs, sentences, or words depending on your preference (default is
						3).
					</li>
					<li>
						<code>units</code> – Choose the unit type: <code>paragraphs</code>,{" "}
						<code>sentences</code>, or <code>words</code>.
					</li>
					<li>
						<code>format</code> – Output format selection between <code>plain</code>{" "}
						text or <code>html</code>, making it easy to embed directly into web
						projects or raw text files.
					</li>
				</ul>
				<p className="mt-4">
					These options provide complete control over your placeholder content, empowering
					you to maintain brand consistency and keep your design process smooth and
					meaningful.
				</p>
			</section>

			<section aria-labelledby="technical-overview-section" role="region">
				<h2 id="technical-overview-section" className="mb-2 text-2xl">
					Technical Overview
				</h2>
				<ul className="list-inside list-disc space-y-2 pl-4">
					<li>
						Written entirely in modern, strongly typed TypeScript to ensure code quality
						and maintainability.
					</li>
					<li>
						Zero external dependencies, making it lightweight, fast, and easy to audit
						for security and performance.
					</li>
					<li>
						Employs a functional programming paradigm to produce predictable and pure
						functions, improving testability.
					</li>
					<li>
						Supports both CommonJS and ECMAScript Modules (ESM) to maximize
						compatibility across JavaScript environments.
					</li>
					<li>
						Actively maintained with semantic versioning, ensuring new features and bug
						fixes are delivered promptly.
					</li>
					<li>
						Open-source on GitHub, welcoming community contributions and transparency in
						development.
					</li>
				</ul>
			</section>

			<section aria-labelledby="use-cases-section" role="region">
				<h2 id="use-cases-section" className="mb-2 text-2xl">
					Use Cases
				</h2>
				<ul className="list-inside list-disc space-y-2 pl-4">
					<li>
						<strong>Design mockups:</strong> Create authentic vegan and eco-conscious
						product designs and layouts that speak directly to ethical consumers and
						sustainability advocates.
					</li>
					<li>
						<strong>Branding projects:</strong> Use meaningful filler text in marketing
						materials, websites, and campaigns that promote plant-based living, animal
						rights, and environmental stewardship.
					</li>
					<li>
						<strong>Educational apps:</strong> Populate learning platforms and
						informational tools with contextually relevant placeholder content tailored
						to veganism, nutrition, and sustainable practices.
					</li>
					<li>
						<strong>Startup prototypes:</strong> Accelerate development of plant-based
						product MVPs and pitch decks with relevant, aligned placeholder text.
					</li>
					<li>
						<strong>Blogs and portfolios:</strong> Add a touch of personality and
						ethical alignment to your personal or professional projects with thematic
						filler content.
					</li>
					<li>
						<strong>Open-source projects:</strong> Enhance your projects by using Vegan
						Ipsum’s unique placeholder text that reflects conscious values while
						avoiding the generic “Lorem Ipsum” fallback.
					</li>
				</ul>
			</section>
		</SectionContainer>
	);
}
