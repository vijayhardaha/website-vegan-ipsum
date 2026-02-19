import React from "react";

import {
	Hero,
	HowToUse,
	IpsumGenerator,
	Overview,
	Benefits,
	Audience,
	UseCases,
	ContactCTA,
} from "@/components/sections/home/";

/**
 * Home page component.
 * Renders the main sections of the homepage.
 *
 * @returns {React.ReactNode} The rendered homepage.
 */
function Home(): React.ReactNode {
	return (
		<div>
			<Hero />

			<IpsumGenerator />

			<HowToUse />

			<Overview />

			<Benefits />

			<Audience />

			<UseCases />

			<ContactCTA />
		</div>
	);
}

export default Home;
