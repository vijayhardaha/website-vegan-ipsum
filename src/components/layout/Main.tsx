import type { JSX, ReactNode } from "react";

/**
 * Props for the Main component.
 */
interface MainProps {
	children: ReactNode;
}

/**
 * This component serves as the main content wrapper for the application.
 *
 * @returns {JSX.Element} The rendered main content area.
 */
export default function Main({ children }: MainProps): JSX.Element {
	return (
		<main id="main" className="overflow-hidden">
			{children}
		</main>
	);
}
