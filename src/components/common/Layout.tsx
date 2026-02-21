import { ReactNode } from "react";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Main from "@/components/common/Main";

/**
 * Props for the Layout component.
 */
interface LayoutProps {
	children: ReactNode;
}

/**
 * A layout component that wraps the entire application, providing a consistent
 * structure with a header, main content area, and footer.
 *
 * @param {ReactNode} children - React children elements to be rendered.
 * @returns	{ReactNode} The rendered layout component with header, main content, and footer.
 */
export default function Layout({ children }: LayoutProps): ReactNode {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}
