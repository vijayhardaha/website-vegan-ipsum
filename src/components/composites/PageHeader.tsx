import { ReactNode, ReactElement } from "react";

import Container from "./Container";

/**
 * Props for the PageHeader component.
 * @property {string} title - The main title of the page.
 * @property {string} [subtitle] - An optional subtitle providing additional context.
 */
interface PageHeaderProps {
	title: string | ReactElement;
	description?: string | ReactElement;
	tagline?: string | ReactElement;
	children?: ReactNode;
}

/**
 * A reusable page header component that displays a title and an optional subtitle.
 *
 * @param {PageHeaderProps} props - The props for the component.
 * @returns {ReactNode} The rendered PageHeader component.
 */
export default function PageHeader({
	title,
	description,
	tagline,
	children,
}: PageHeaderProps): ReactNode {
	return (
		<section className="relative py-16 pb-6 md:py-24 md:pb-10">
			<div className="pointer-events-none absolute top-[-120px] right-[8%] h-[450px] w-[450px] rounded-full bg-[#d4edcc] opacity-36 blur-[80px]"></div>
			<div className="pointer-events-none absolute bottom-[50px] left-[6%] h-[380px] w-[380px] rounded-full bg-[#c8e6b8] opacity-36 blur-[80px]"></div>

			<Container>
				<div className="relative">
					<div className="bg-primary-muted border-primary/40 text-primary-dark mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold">
						{tagline}
					</div>

					<h1 className="text-primary-solid mb-5 text-4xl md:text-6xl">{title}</h1>

					<p className="max-w-2xl text-lg leading-relaxed md:text-xl">{description}</p>
					{children}
				</div>
			</Container>
		</section>
	);
}
