import React, { ReactNode } from "react";

interface MainProps {
	children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
	return (
		<main className="pt-12 pb-12">
			<div className="mx-auto max-w-5xl px-4 md:px-6">{children}</div>
		</main>
	);
};

export default Main;
