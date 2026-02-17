import React, { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/layout/Main";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<Main>{children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
