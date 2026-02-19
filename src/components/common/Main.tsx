import { ReactNode } from "react";

/**
 * Props for the Main component.
 */
interface MainProps {
	children: ReactNode;
}

/**
 * This component serves as the main content wrapper for the application.
 *
 * @returns {ReactNode} The rendered main content area.
 */
const Main = ({ children }: MainProps): ReactNode => {
	return (
		<main id="main" className="overflow-hidden">
			{children}
		</main>
	);
};

export default Main;
